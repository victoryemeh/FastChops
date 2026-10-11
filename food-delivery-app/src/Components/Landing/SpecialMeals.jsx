import './landingpage.css'
import meal1 from '../../assets/big-bread-crepe.svg'
import meal2 from '../../assets/meat-balls.png'
import meal3 from '../../assets/burger-meal.png'
function SpecialMeals() {
  return (
    <div className="special-meals">
      <h2>Special Meals of the day!</h2>
      <p>
        Check our special menu of the day and get discounts on all our meals and
        swift delivery to your door step.
      </p>
        <div className="meals">
            <div className="meal">
                <img src={meal1} alt='meal1' className='meal-img'/>
                <h2>Bread Crepe</h2>
                <p className='meal-desc'>Get our very yummy bread crepe today</p>
            </div>
            <div className="meal">
                <img src={meal2} alt='meal2' className='meal-img'/>
                <h2>Meatballs</h2>
                <p className='meal-desc'>Enjoy our delicious meatballs</p>
            </div>
            <div className="meal">
                <img src={meal3} alt='meal3' className='meal-img'/>
                <h2>Burger Meal</h2>
                <p className='meal-desc'>Our special burger combo</p>
            </div>
        </div>

    </div>
  );
}
export default SpecialMeals