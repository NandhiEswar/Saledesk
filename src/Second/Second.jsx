import React from 'react';

function Second() {
  return (
    <div className="flex flex-row justify-between items-center py-10 px-14 bg-red-800">
          
          
          <div className='flex items-start flex-col'>
              <h1 className="text-3xl font-bold text-gray-800 mb-6">You Can View How It Works</h1>
              <p>this video demostrat how it works </p>
        </div>
      <iframe
        src="https://sconexsoft-my.sharepoint.com/personal/kgn_murthy_sconexsoft_com/_layouts/15/embed.aspx?UniqueId=e6b0ca20-c7f5-483d-87c3-5dfa83275ccd&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create"
        width="640"
        height="360"
        frameBorder="0"
        scrolling="no"
        allowFullScreen
        title="Saledesk Product Video"
        className="shadow-lg rounded-lg"
      ></iframe>
    </div>
  );
}

export default Second;