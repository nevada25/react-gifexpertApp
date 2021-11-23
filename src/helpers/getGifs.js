export const getGif = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=MtMhv1nNN5y6o7uLVMulLD5yoXgV6sPs&limit=10&q=${encodeURI(category)}`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    return data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
};
