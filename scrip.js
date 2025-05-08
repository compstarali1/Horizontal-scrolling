        function changeIframe(url) {
            try {
                document.getElementById('iframeContainer').src = url;
                document.getElementById('modal').style.display = 'block';
            } catch (error) {
                console.error("Error changing iframe source: ", error);
                alert("An error occurred while trying to load the content. Please try again.");
            }
        }