import React, { useState } from 'react'
import "./foodchoice.scss"
import Breakfastimg from "../../../../assets/images/Breakfast.jpg"
import Lunch from "../../../../assets/images/Lunch.jpeg"
import Dinner from "../../../../assets/images/Dinner.jpg"
import Breakfast from '../breakfast'
export default function FoodChoice() {
	
	const [open, setOpen] = useState(false)

	const handleClick = () => {
		setOpen(!open)
	}
  return (
    <div className='foodchoice'>
        <div className="container">
            <div className='foodchoice-grid'>
				<div className="foodchoice-card" onClick={handleClick}>
					<div className='foodchoice-img'>
						<img src={Breakfastimg} alt="tea" />
					</div>
					<p>Breakfast</p>
				</div>
				<div className='foodchoice-card'>
					<div className='foodchoice-img'>
						<img src={Lunch} alt="Lunch" />
					</div>
					<p>Lunch</p>
				</div>
				<div className='foodchoice-card'>
					<div className='foodchoice-img'>
						<img src={Dinner} alt="Dinner" />
					</div>
					<p>Dinner</p>
				</div>
			</div>
        </div>
		<div className={`breakfast ${open ? 'open' : ''}`}>
				{open && <Breakfast />}
			</div>

    </div>
  )
}
