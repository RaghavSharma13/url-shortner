const url=`https://api.shrtco.de/v2/shorten?url=`;
const getShortLink=async(link)=>{
    try{
        const response=await (await fetch(url+link)).json();
        if(response.error) throw new Error("error");
        return {
            fullLink:response.result.original_link,
            shortLink:response.result.short_link,
            code:response.result.code,
        }
    }
    catch{
        return {error:"error"}
    }
    // return [response.result.original_link,response.result.short_link,response.result.code]
}
export default getShortLink;