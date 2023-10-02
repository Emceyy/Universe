import './reminder.css'
import img from '../../assets/reminder.jpg'
const Reminder = () => {
  return (
    <section id="reminder">
    <div className='container'>
        <div className='main'>
        <div className='imgreminder'>
               <img src={img} alt ="" className='image' draggable={false}></img>
            </div>
            <div className='reminder'>
                <p className='remindertext'>What is Lorem Ipsum?
            Death is a funny thing. It’s something that we all know is coming, but we never quite know when it will arrive. As the great philosopher Woody Allen once said, “I’m not afraid of death; I just don’t want to be there when it happens” . But what about the universe? According to scientists, the universe will eventually come to an end as well. Astrophysicist Neil deGrasse Tyson once said, “The universe is under no obligation to make sense to you” . It’s a funny thought that we humans spend so much time trying to understand the universe when it’s not even required to make sense to us.
                </p>
            </div>
        </div>

    </div>
    </section>
  )
}

export default Reminder
