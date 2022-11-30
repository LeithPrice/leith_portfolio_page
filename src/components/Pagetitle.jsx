// This component was made to be used across all the pages, so that each page could have a uniform looking heading and slogan
// Both of which would display in the same size and font. A prop.title and prop.description are passed in, in the other pages

const Pagetitle = ({ title, description }) => {
    return (
      <>
        <h2 style={style}>{title}</h2>
        <h3 style={style}>
          <em>{description}</em>
        </h3>
      </>
    );
  };
  
  const style = {
    paddingTop: "20px",
    textAlign: "center",
    marginTop: "10px",
    marginBottom: "15px",
  };
  
  export default Pagetitle;
  