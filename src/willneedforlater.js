/*
import fetch from "node-fetch";

async function GetLikedTweets(){
    let response = await fetch("https://api.twitter.com/2/users/1508671947831394306/liked_tweets?max_results=100", {
        headers: {
            Authorization: "Bearer AAAAAAAAAAAAAAAAAAAAABqOawEAAAAAN89IS9E0xVxhE0m023VO%2BYG3xjg%3DYZMffvJPQkunLW1H4Rkl6MGqJqBbOTVGaAwVzgCcyhnQxs6bb9"
        }
    })

    return await response.json()
}

let x = await GetLikedTweets()

x.data.forEach(x => {
    console.log(x.id)
});

*/
