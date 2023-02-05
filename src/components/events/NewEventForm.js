import { useRef } from "react";

import Card from "../ui/Card";

export default function NewEventForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const eventData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddEvent(eventData);
  }

  return (
    <Card>
      <form
        onSubmit={handleSubmit}
        className="p-4 flex flex-col gap-4 text-slate-700 max-w-[600px]"
      >
        <section className="flex flex-col gap-2">
          <label htmlFor="title" className="font-bold text-slate-500">
            Event Name
          </label>
          <input
            type="text"
            required
            id="title"
            ref={titleInputRef}
            className="border-2 px-2 max-w-[400px]"
          />
        </section>
        <section className="flex flex-col gap-2">
          <label htmlFor="image" className="font-bold text-slate-500">
            Event Image
          </label>
          <input
            type="url"
            required
            id="image"
            ref={imageInputRef}
            className="border-2 px-2 max-w-[400px]"
          />
        </section>
        <section className="flex flex-col gap-2">
          <label htmlFor="address" className="font-bold text-slate-500">
            Event Address
          </label>
          <input
            type="text"
            required
            id="address"
            ref={addressInputRef}
            className="border-2 px-2 max-w-[400px]"
          />
        </section>
        <section className="flex flex-col gap-2">
          <label htmlFor="description" className="font-bold text-slate-500">
            Event Description
          </label>
          <textarea
            required
            rows="5"
            id="description"
            ref={descriptionInputRef}
            className="border-2 px-2 max-w-[400px]"
          />
        </section>
        <button className="bg-slate-700 text-slate-100 max-w-[150px] self-end px-5 py-2 rounded">
          Add Event
        </button>
      </form>
    </Card>
  );
}
