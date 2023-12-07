// HTML form element
// const form = document.getElementById('imageForm');

// form.addEventListener('submit', async (event) => {
//           event.preventDefault();

document.getElementById('imageInput').addEventListener('change', (e) => {
          let files = e.target.files
          let resizedArray = []
          const fileArr = [...files]
          console.log("Original Files",fileArr)
          if (fileArr.length > 0) {
                    fileArr.forEach(async (file) => {
                              const resizedImage = await resizeImage(file);
                              resizedArray.push(resizedImage)
                    });
                    console.log("Resized files", resizedArray)
          }
          // const compressedImage = await compressImage(resizedImage);
          // uploadToServer(compressedImage);
})

// const files= input.files;
// let resizedArray = []
// if (files.length>0) {
//           files.forEach(async (file) => {
//                     const resizedImage = await resizeImage(file);
//                     resizedArray.push(resizedImage)
//           });
//           console.log("first",resizedArray)
//           // const compressedImage = await compressImage(resizedImage);
//           // uploadToServer(compressedImage);
// }
// });

// Function to resize the image using HTML5 Canvas
async function resizeImage(file) {
          return new Promise((resolve) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    

                    reader.onload = (event) => {
                              const img = new Image();
                              img.src = event.target.result;

                              img.onload = () => {
                                        const canvas = document.createElement('canvas');
                                        const ctx = canvas.getContext('2d');
                                        canvas.width = 800; // Set desired width
                                        canvas.height = (canvas.width / img.width) * img.height;

                                        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                                        canvas.toBlob((blob) => {
                                                  resolve(new File([blob], file.name, { type: 'image/jpeg', lastModified: Date.now() }));
                                        }, 'image/jpeg');
                              };
                    };
          });
}

// // Function to compress the image
// async function compressImage(file) {
//           // Use a library like image-conversion or image-compressor here
//           // Example with image-compressor:
//           const compressed = await imageCompressor(file, {
//                     quality: 0.8, // Adjust the quality as needed
//                     maxWidth: 800 // Set desired maximum width
//           });
//           return compressed;
// }

// Function to upload the processed image to the server
function uploadToServer(file) {
          const formData = new FormData();
          formData.append('image', file);

          fetch('http://yourserver/upload', {
                    method: 'POST',
                    body: formData
          })
                    .then(response => {
                              // Handle server response
                    })
                    .catch(error => {
                              // Handle error
                    });
}
