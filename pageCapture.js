const url = window.location.href;

chrome.downloads.download(
    { url: url,
      filename: "placement.html" }, complete()
    )

function complete()
{
    console.log("success");
}