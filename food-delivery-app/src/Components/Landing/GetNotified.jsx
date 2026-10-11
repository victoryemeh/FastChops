import './landingpage.css'
function GetNotified() {
  return (
    <div className="get-notified">
        <div className='notify-text'>
      <h3>Get notified when we update!</h3>
      <p>Get notified when we add new items to our specials menu, update our price list of have promos!</p>
      </div>
      <div className="newsletter-form">
        <input type="email" placeholder="example@email.com" />
        <button>Get notified</button>
      </div>
    </div>
  );
}
export default GetNotified