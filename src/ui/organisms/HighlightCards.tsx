import React from 'react'
import { HighLightCard } from '../molecules/HighLightCard'
import { images } from '../../assets'


type CardItem = {
  image: string;
  title: string;
  description: string;
};

export const HighlightCards:React.FC = () => {
    const cardList:CardItem[] = [
        {image: images.onlineImage, title: 'Online Banking', description: 'Our model web and mobile applications allow you to keep track of your finances where ever you are in the world.'},
        {image: images.budgetImage, title:"Simple Budgeting", description: "Simple Budgetin where your money goes each month. Recieve notifications when you're close to hitting your limits."},
        {image: images.onboardingImage, title: 'Fast Onboarding', description: "We don't do branches. Open your account in minutes online and start taking control of your finances right away."},
        {image: images.apiImage, title: "Open API", description: "Manage your savings, investment, pension, and much more from one account. Tracking your money has never been easier."}
    ]

  return (
    <div className='d-flex gap-2 w-100 m-3'>
        {
            cardList.map((item) => <div>
                <HighLightCard title={item.title} description={item.description} avatar={item.image} avatarName={item.title}/>
            </div>)
        }
    </div>
  )
}
