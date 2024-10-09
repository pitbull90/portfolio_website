import List from "./List";
import Items from "./Items";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="work">
        <h2 className='section__title text-cs'>Portfolio</h2>
        <p className='section__subtitle'>My <span>Cases</span></p>

        <List />

        <div className="portfolio__container container grid">
            <Items />
        </div>
    </section>
  )
}

export default Portfolio