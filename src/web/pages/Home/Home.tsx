import React, { ChangeEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
    getCharacter(id: string): void;
    result: any;
    isLoading: boolean;
}

const Home: React.FunctionComponent<Props> = (props) => {
    const { getCharacter, result, isLoading } = props;
    const [id_character, setid_character] = useState('2');
    const { t } = useTranslation();

    useEffect(() => {
        getCharacter(id_character);
    }, [id_character]);

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setid_character(event.target.value);
    };

    return (
        <div>
            <h1>Home</h1>
            <select name="select" onChange={handleChange} value={id_character}>
                <option key={1} value="1">
                    1
                </option>
                <option key={2} value="2">
                    2
                </option>
                <option key={3} value="3">
                    3
                </option>
                <option key={4} value="4">
                    4
                </option>
                <option key={5} value="5">
                    5
                </option>
            </select>
            <br />
            <br />
            {isLoading ? (
                t('charging')
            ) : (
                <div>
                    <img src={result && result.image} alt="imagen" />
                    <p>
                        <strong>ID: </strong>
                        {result && result.id}
                    </p>
                    <p>
                        <strong>Name: </strong>
                        {result && result.name}
                    </p>
                    <p>
                        <strong>Status: </strong>
                        {result && result.status}
                    </p>
                    <p>
                        <strong>Gender: </strong>
                        {result && result.gender}
                    </p>
                    <p>
                        <strong>Species: </strong>
                        {result && result.species}
                    </p>
                    <p>
                        <strong>Location name: </strong>
                        {result && result.location && result.location.name}
                    </p>
                    <p>
                        <strong>Origin name: </strong>
                        {result && result.origin && result.origin.name}
                    </p>
                    <p>
                        <strong>Type: </strong>
                        {result && result.type}
                    </p>
                </div>
            )}
        </div>
    );
};

export default Home;
