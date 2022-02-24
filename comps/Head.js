import NextHead from 'next/head';

const Head = ({ title = "" }) => {
  return ( 
    <NextHead>
      <title>
        Ninja List{title ? " | " : ""}
        {title}
      </title>
    </NextHead>

   );
}
 
export default Head;