import "./About.css"
import { AnimatedText } from '../components/AnimatedText';
import image1 from '../assets/about1.jpg';

export const About = () => {
  console.log("About");

  return (
    <>
    <div className="animated">
        <AnimatedText text="Our Story" className="lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
    </div>
    <div className="Story">
      <p>In 1978, a new bakery opened up on Hereford Street in Christchurch: The French Bakery (La Boulangerie Francaise). At the time it was a revolutionary new bread and pastry store of a kind never seen before.</p>
      <p>The people in the street and all around were delighted because this wasn’t your run of the mill pie-with-tom sauce and bun bakery, this was far more exotic – and fashionable. And in fact, it was perfect timing for the homemakers and workers of Christchurch who were well ready to expand their tastes beyond the standard scone and pikelet bakery fare – delicious of course – but a little ho-hum.</p>
      <p>Because the culinary culture of this forward-thinking city had become rather sophisticated – and with that came the want for food you could talk about, even rhapsodiseover. People fancied a few more of the finer things in life … things like light-as-air pastries and artisan breads. So the folks of Christchurch threw their smart hats in the air and hightailed it down to Hereford where they were treated to flaky, buttery croissants, crusty baguettes, the most delicate of choux pastries and bite-sized petite savouries.</p>
      <p>It didn’t matter that no one could pronounce the names; people soon learnt to curl their tongues around the words almost as quickly as around the fabulous food. A love affair with French baking had begun. And from Hereford Street in the ’70s to Raycroft Street in the ’80s, a diversification into baking wholesale for the frozen food market has seen The French Bakery reach a forty-year milestone at Port Hills Road.</p>
      <p>Today, our company employs over 100 people. These employees are critical to the daily production of a huge variety of baked then frozen products, including croissants, French breads, Italian breads, pizzas, pies, pastries, savouries, petit fours, muffins and tiny tartelettes. That’s it, in a nutshell, or should we say, Voila, as the team at French Bakery carry on producing the excellent and very versatile, distinctly European fare we are renown for.</p>
      <p>Cheers!</p>
      </div>
      <div className="imgContainer">
        <img src={image1} alt="About" />
      </div>
    </>
  );
};


