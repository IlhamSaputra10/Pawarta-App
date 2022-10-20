import headerStyle from '../styles/Header.module.css'

const Header = () => {
    return (
      <div className={headerStyle.title}>
        <h1><span>Pawarta</span> News </h1>
        <p className={headerStyle.description}>Keep up to date with the latest web dev news</p>
      </div>
    )
}
  
  export default Header

{/* <style jsx>
            {`
                .title {
                    color: red
                }
            `}
</style> */}