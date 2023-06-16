import c from "./PhoneLink.module.css"
export const PhoneLink = () => {
    return (
        <a href="tel:79045682983">
            <div className={c.phone}>
                <div className={c.mobile}><div className={c.mobile_btn}></div></div>
                <p>+7 904 56 82 983</p></div></a>
    )
}
