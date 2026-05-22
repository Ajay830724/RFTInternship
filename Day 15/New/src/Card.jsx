import "./Card.css";
export default function Card({ data }) {
    return (
        <div className="card">
            <img
                src={data.img}
                alt="User"
                className="card-img"
            />

            <h2 className="card-name">
                {data.name}
            </h2>

            <p className="card-email">
                {data.email}
            </p>

        </div>
    );
}