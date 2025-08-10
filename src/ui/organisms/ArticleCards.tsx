import { ArticleCard, ArticleCardProps } from '../molecules/ArticleCard'
import { images } from '../../assets'

export const ArticleCards = () => {

    const articleCard:ArticleCardProps[] = [
        {image: images.confettiImage, authorName: "-By Claire Robinson", title:"Recieve money in any currency with no fees", description: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ..."},
        {image: images.restaurantImage, authorName: "-By Wilson Hutton", title:"Treat yourself without worrying about money", description: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ..."},
        {image: images.planeImage, authorName: "-By Wilson Hutton", title:"Take your Digitalbank card wherever you go", description: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even ..."},
        {image: images.confettiImage, authorName: "-By Claire Robinson", title:"Our invite-only Beta accounts are now live!", description: "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through ..."}
    ]

  return (
    <div className='d-flex w-100'>
        {
            articleCard.map((item) => <div>
                <ArticleCard image={item.image} title={item.title} authorName={item.authorName} description={item.description}/>
            </div>)
        }
    </div>
  )
}
