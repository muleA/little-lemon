
const OurStory = () => {
  return (
    <section className=" grid md:grid-cols-2 grid-cols-1 md:grid-cols-2 md:gap-14 gap-4 md:mx-36 mx-2">
      <div className="md:pt-6 pt-2 ">
        <h1 className="col-span-1 text-3xl text-yellow-500 mb-2">
          Little Lemon
        </h1>
        <h2 className=" text-xl mb-4">Addis Ababa</h2>
        <p>
          At Little Lemon, we take pride in offering a culinary experience like
          no other. Located in the heart of Addis Ababa, our restaurant combines
          the finest ingredients with a passion for flavor, creating dishes that
          are a true delight for your senses.
        </p>

        <p>
          Our chefs are masters of their craft, dedicated to bringing you dishes
          that are both visually stunning and incredibly delicious. We believe
          in using only the freshest, locally-sourced ingredients to ensure
          every bite is a burst of authentic flavor.
        </p>

        <p>
          Whether you're a connoisseur of fine dining or simply looking for a
          cozy spot to enjoy a delicious meal, Little Lemon has something for
          everyone. Join us and savor the taste of Addis Ababa's culinary gem.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <img
          src={'./assets/chefs-mario-and-adrian_a.jpg'}
          className="max-w-1/2 max-w-full rounded-xl	 "
          alt="Chefs Mario and Adrian"
        />
        <img
          src={'./assets/chefs-mario-and-adrian_b.jpg'}
          className="max-w-1/2 max-w-full rounded-xl	"
          alt="Chefs Mario and Adrian"
        />
      </div>
    </section>
  );
};

export default OurStory;
