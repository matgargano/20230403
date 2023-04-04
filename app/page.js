import Image from "next/image";
import Link from "next/link";

export default async function Home() {

  const url = `https://api.themoviedb.org/3/tv/456-the-simpsons?api_key=${process.env.API_KEY}`;
  const req = await fetch(url);
  const res = await req.json();

  return (
    <main>
         <div>
            {res.seasons.map(season => {
              const {air_date, name, poster_path, season_number} = season;
              return <div key={air_date}>
                <pre></pre>
                <Link href={`/season/${season_number}`}>
                  <Image 
                    src={`https://image.tmdb.org/t/p/original/${poster_path}`} 
                    height={300} 
                    width={300} 
                    alt={name}
                  />
                  <p>{air_date}</p>
                  <p>{name}</p>
                </Link>
              </div>
            })}
         </div>
    </main>
  )
}
