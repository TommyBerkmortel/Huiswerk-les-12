import React, {useRef, useState} from 'react';
import {useForm} from 'react-hook-form';
import './App.css';
import Counter from "./Components/Counter/Counter";
import Button from "./Components/Button/Button";

function App() {
    const [strawberryCounter, setStrawberryCounter] = useState(0);
    const [bananaCounter, setBananaCounter] = useState(0);
    const [appleCounter, setAppleCounter] = useState(0);
    const [kiwiCounter, setKiwiCounter] = useState(0);
    const [formFirstName, setFormFirstName] = useState('');
    const [formLastName, setFormLastName] = useState('');
    const [formAge, setFormAge] = useState(0);
    const [formZipcode, setFormZipcode] = useState('');
    const [formDeliverFrequency, setFormDeliverFrequency] = useState('');
    const [formTimeslot, toggleFormTimeslot] = useState('overdag')
    const [formComment, setFormComment] = useState('');
    const [formNewsletter, setFormNewsletter] = useState('')
    const {register, handleSubmit} = useForm();


    function reset() {
        setStrawberryCounter(0);
        setBananaCounter(0);
        setAppleCounter(0);
        setKiwiCounter(0);
    }

    function onFormSubmit(data) {
        console.log(`
        order: 
        
        strawberry: ${strawberryCounter}, 
        banana: ${bananaCounter}, 
        apple: ${appleCounter}, 
        kiwi: ${kiwiCounter}
        `, data);
    }

    return (
        <>
            <body>
            <h1>Fruitmand bezorgservice</h1>
            <section>
                <Counter
                    fruitNameCounter={strawberryCounter}
                    setFruitNameCounter={setStrawberryCounter}
                    fruitName="Aardbeien"
                    emoticon="🍓"
                />

                <Counter
                    fruitNameCounter={bananaCounter}
                    setFruitNameCounter={setBananaCounter}
                    fruitName="Bananen"
                    emoticon="🍌"
                />

                <Counter
                    fruitNameCounter={appleCounter}
                    setFruitNameCounter={setAppleCounter}
                    fruitName="Appels"
                    emoticon="🍎"
                />

                <Counter
                    fruitNameCounter={kiwiCounter}
                    setFruitNameCounter={setKiwiCounter}
                    fruitName="Kiwi's"
                    emoticon="🥝"
                />
            </section>

            <Button
                buttonType="button"
                buttonText="Reset"
                onClickFunction={() => reset()}
            />

            </body>

            <form onSubmit={handleSubmit(onFormSubmit)}>
                <fieldset>
                    <legend>Contact formulier</legend>

                    <label htmlFor="details-firstName">
                        Voornaam
                        <input
                            type="text"
                            {...register("firstname")}
                            id="details-firstName"
                            value={formFirstName}
                            onChange={(e) => setFormFirstName(e.target.value)}
                        />
                    </label>

                    <label htmlFor="details-lastName">
                        Achternaam
                        <input
                            type="text"
                            {...register("lastname")}
                            id="details-lastName"
                            value={formLastName}
                            onChange={(e) => setFormLastName(e.target.value)}
                        />
                    </label>

                    <label htmlFor="details-age">
                        Leeftijd
                        <input
                            type="number"
                            {...register("age")}
                            id="details-age"
                            value={formAge}
                            onChange={(e) => setFormAge(e.target.value)}
                        />
                    </label>

                    <label htmlFor="details-zipcode">
                        Postcode
                        <input
                            type="text"
                            {...register("zipcode")}
                            id="details-zipcode"
                            value={formZipcode}
                            onChange={(e) => setFormZipcode(e.target.value)}
                        />
                    </label>

                    <label htmlFor="details-deliverFrequency">
                        Bezorgfrequentie
                        <select
                            {...register("deliver_frequency")}
                            id="details-deliverFrequency"
                            value={formDeliverFrequency}
                            onChange={(e) => setFormDeliverFrequency(e.target.value)}
                        >
                            <option value="iedere week">Iedere week</option>
                            <option value="om de week">Om de week</option>
                            <option value="iedere maand">Iedere maand</option>
                        </select>
                    </label>

                    <section className="radio-buttons">
                        <label htmlFor="details-timeslot-daytime">

                            <input
                                type="radio"
                                {...register("timeslot")}
                                id="details-timeslot-daytime"
                                value="overdag"
                                checked={formTimeslot === 'overdag'}
                                onChange={(e) => toggleFormTimeslot(e.target.value)}
                            />
                            Overdag
                        </label>

                        <label htmlFor="details-timeslot-nighttime">

                            <input
                                type="radio"
                                {...register("timeslot")}
                                id="details-timeslot-nighttime"
                                value="'s avonds"
                                checked={formTimeslot === "'s avonds"}
                                onChange={(e) => toggleFormTimeslot(e.target.value)}
                            />
                            's Avonds
                        </label>
                    </section>

                    <label htmlFor="details-comment">
                        Opmerking
                        <textarea
                            type="text"
                            {...register("comment")}
                            id="details-comment"
                            value={formComment}
                            onChange={(e) => setFormComment(e.target.value)}
                        />
                    </label>

                    <label htmlFor="details-newsletter">

                        <input
                            type="checkbox"
                            {...register("newsletter")}
                            id="details-newsletter"
                            onChange={(e) => setFormNewsletter(e.target.value)}
                        />
                        Ik ga akkoord met de voorwaarden
                    </label>
                </fieldset>

                <Button
                    buttonType="submit"
                    buttonText="Verzend"
                />
            </form>
        </>
    );
}

export default App;

