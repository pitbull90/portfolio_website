import { FaArrowRight } from 'react-icons/fa';
import shapeTwo from '../../assets/shape-2.png'
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { title } from 'framer-motion/client';

const Items = ({projectItems}) => {
  return (
    <>
      {projectItems.map((projectItem) => {
        const { id, img, category, title, description } = projectItem;
        return(
          <motion.div 
          layout
          animate={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0.8, scale: 0.6 }}
          exit={{ opacity: 0.8, scale: 0.6 }}
          transition={{duration: .3}}
           key={id} className="portfolio__items card card_two">
            <div className="portfolio__img_wrapper">
              <img src={img} alt="" className="portfolio__img" />
            </div>

            <span className="portfolio__category text-cs">{category}</span>
            <h3 className="portfolio__title">{title}</h3>
            <p className="portfolio__description">{description}</p>

            <a href="" className="link">
              See Pricing
              <FaArrowRight className='link__icon'></FaArrowRight>
            </a>

            <img src={shapeTwo} alt="" className="shape c__shape" />
          </motion.div>
        )
      })}
    </>
  )
}

Items.propTypes = {
  projectItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      img: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Items