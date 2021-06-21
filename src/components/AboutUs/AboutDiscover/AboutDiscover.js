import React from "react";

const AboutDiscover = () => {
  return (
    <div className="container text-center my-5 px-3">
      <h2 className="dancing-text display-5 text-red">Discover</h2>
      <h3 className="ubuntu-text">RESTAURANT HISTORY</h3>
      <h4 className="ubuntu-text mt-5">
        The standard Lorem Ipsum passage, used since the 1500s
      </h4>
      <p style={{ textAlign: "justify" }} className="px-3 openSans-text">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas moles - tias excepturi sint occaecati cupiditate non provident,
        similique sunt in culpa qui officia deserunt mollitia animi, id est
        laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
        distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
        cumque nihil impedit quo minus id quod maxime placeat facere possimus,
        omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem
        quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet
        ut et voluptates repudiandae sint et molestiae non recusandae. Itaque
        earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
        voluptatibus maiores alias consequatur aut perferendis doloribus
        asperiores repellat."
      </p>
      <div className="row mt-3 px-4">
        <div className="col-md-6 p-2">
          <img
            className="img-fluid"
            src="https://i.ibb.co/dWqh9DZ/heidi-kaden-olb3v-ROGz-OQ-unsplash-1.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 p-2">
          <img
            className="img-fluid"
            src="https://i.ibb.co/8DZS5DK/paula-vermeulen-URj-Zkhqsu-Bk-unsplash-2-1.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutDiscover;
