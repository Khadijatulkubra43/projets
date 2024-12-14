import news from '../../public/assets/news.png'
const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light d-inline-block my-3 mx-3 px-2 py-2 mb-6 align-item-center"
      style={{ maxWidth: "375px" }}
    >
      <img
        src={src?src:news}
        style={{ height: "200px", width: "360px" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description?description.slice(0, 90):"Stay Updated with News in Short Get quick, concise updates on the latest news from around the world. Our News in Short brings you brief yet impactful summaries of the most important stories across politics, sports, technology, business, entertainment, and more—delivering everything you need to know, in just a few sentences. Stay informed without the clutter!"
          }
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
