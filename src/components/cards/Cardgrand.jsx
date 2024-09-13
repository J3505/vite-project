import mark from '../../assets/img/comillas.png'

const Cardgrand = () => {
  return (
    <div className="cardgrand-container">
      <div className="card-left">
        <div className="label">
          <label className="title">-TAYLOR BALLAM</label>
          <label className="subtitle">MODO STUDIOS</label>
        </div>

      </div>
      <div className="card-right">
        <div className="card-mark">
            <img src={mark} alt="" />

        </div>
        <div className="card-label">
            <label>"We explored the best of Tokio, Kyoto, and Osaka, all without the usual travel stress. Truly a trip of a lifetime!"</label>

        </div>
        <div className="card-text">
            <label>(FIRST)</label>
            <label>(PRESENT)</label>
            <label>01</label>
        </div>

      </div>
    </div>
  )
}

export default Cardgrand
