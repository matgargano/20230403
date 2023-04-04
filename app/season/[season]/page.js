const Page = async (props) => {

    const url = 
        `https://api.themoviedb.org/3/tv/456-the-simpsons/season/${props.params.season}?api_key=${process.env.API_KEY}`;
    const req = await fetch(url);
    const res = await req.json();

    return <div>SEASON... {url} <pre>{JSON.stringify(res,0,1)}</pre></div>
}

export default Page;