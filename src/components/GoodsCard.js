import f from './GoodsCard.module.css';

function GoodsCards({ props}) {

    return (
        <div className={f['card-container']}>
                <div className={f['item-picture']}>
                    <img
                        className={f['item-picture__img']}
                        src={
                            './images/' +
                            props.image
                        }
                        alt={'./images/' +props.image}
                    />
                </div>
                <div className={f['item-title']}>
                    <p>{props.title}</p>
                </div>
                <div className={f['item-desc']}>
                    <p className={f['catalog_rate']}>
                        Ціна: {props.price} грн/кг
                    </p>
                </div>
            
        </div>
    );
}
export default GoodsCards;