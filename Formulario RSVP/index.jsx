const { useState } = React;

export function EventRSVPForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [attendees, setAttendees] = useState("");
  const [dietary, setDietary] = useState("");
  const [additionalGuests, setAdditionalGuests] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          required
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="number"
          required
          min="1"
          placeholder="Number of attendees"
          value={attendees}
          onChange={(e) => setAttendees(e.target.value)}
        />

        <input
          type="text"
          placeholder="Dietary preferences"
          value={dietary}
          onChange={(e) => setDietary(e.target.value)}
        />

        <label>
          <input
            type="checkbox"
            checked={additionalGuests}
            onChange={(e) => setAdditionalGuests(e.target.checked)}
          />
          Bringing additional guests
        </label>

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div>
          <h2>RSVP Submitted!</h2>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Number of attendees: {attendees}</p>
          <p>Dietary preferences: {dietary ? dietary : "None"}</p>
          <p>
            Bringing additional guests: {additionalGuests ? "Yes" : "No"}
          </p>
        </div>
      )}
    </div>
  );
}