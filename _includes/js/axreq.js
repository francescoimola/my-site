const myurl = "http://api.are.na/v2/channels/how-to-feel-more-at-home/thumb";
axios.get(myurl)
    .then(resp => {
        console.log(resp.data);
    })
    .catch(err => {
        console.log(err);
    });