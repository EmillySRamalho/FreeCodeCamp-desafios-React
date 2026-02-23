export function MoodBoardItem({ color, image, description }) {
  return (
    <div
      className="mood-board-item"
      style={{ backgroundColor: color }}
    >
    <img className = "mood-board-image" src = {image} />
    <h3 className = "mood-board-text">{description}</h3>
     </div>
  );
}

export function MoodBoard(props) {
  return (
    <div className = "mood-board">
      <h1 className="mood-board-heading">
        Destination Mood Board
      </h1>

      <MoodBoardItem
        color="#1F3A5F"
        image="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?fm=jpg&q=60&w=3000&auto=format&fit=crop"
        description="PARIS"
      />

      <MoodBoardItem
        color="#2E2E2E"
        image="https://res.cloudinary.com/dtljonz0f/image/upload/c_auto,ar_4:3,w_3840,g_auto/f_auto/q_auto/v1/gc-v1/new-york-pass/times_square-shutterstock_1429324979"
        description="NOVA YORK"
      />

      <MoodBoardItem
        color="#D62828"
        image="https://viagem.cnnbrasil.com.br/wp-content/uploads/sites/5/2021/07/canada.jpg"
        description="CANADA"
      />
    </div>
  );
}

