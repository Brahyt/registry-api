import './SearchBar.scss';
import React from "react";
import { Container, FormControl, InputGroup, Spinner } from 'react-bootstrap';

const SearchBar = ({startSearch}) => {
    return (
        <div className="Search">
            <div className="Search-header">
                <Container className="py-3">
                    <InputGroup onKeyDown={(e) => startSearch(e)}>
                        <FormControl
                            placeholder="Search buildpacks"
                            aria-label="Search buildpacks"
                            size="lg"
                        />
                    </InputGroup>
                </Container>
            </div>
        </div>
    )
}

export default SearchBar;
