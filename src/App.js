import minaimg from "./image/image1.jpg"
function App() {
  return (
    <div className="Moz-Story-container">
      <div className="header bg-primary text-white text-center py-4">
        <h1>The Moz Story</h1>
        <p>We Know SEO.In fact,We Wrote the blog on it</p>
      </div>
      <div content container my-5>
        <section className="intro text-center mb-5">
          <p>At Moz, we believe there is a better way to do marketing.
             A more valuable way where customers are earned rather than bought.
              We’re obsessively passionate about it, and our mission is to help people achieve it. 
              We focus on search engine optimization. It’s one of the least understood and least transparent
               aspects of great marketing, and we see that as an opportunity. 
               We’re excited to simplify SEO for everyone through our software, education, and community</p>
        </section>
        <section className="founding row align-items-center mb-5">
          <div className="col-md-6 text-center">
            <img src={minaimg} alt="simple image"/>
            

          </div>

        </section>

      </div>

    </div>
  );
}

export default App;
