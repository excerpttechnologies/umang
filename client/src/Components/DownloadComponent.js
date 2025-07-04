import React from 'react';

 const DownloadComponent = () => {
  const handleDownload = () => {
   //The path to the PDF file inside the 'public' folder
    const pdfUrl =` ${process.env.PUBLIC_URL}/sample.pdf`;

  //Create a temporary link element and simulate a click to download the file
     const link = document.createElement('a');
     link.href = pdfUrl;
     link.setAttribute('download', 'sample.pdf'); // Optional: Rename the file during download
     document.body.appendChild(link);
     link.click();
     document.body.removeChild(link); // Clean up the link after downloading
   };

   return (
     <div>       <p>
         Here is some content inside the component, and below is the download link.
       </p>
      <a href="#" onClick={handleDownload} style={{color: 'blue', textDecoration: 'underline', cursor: 'pointer'}}>
        Download for more details
       </a>
     </div>
 );
 };

 export default DownloadComponent;