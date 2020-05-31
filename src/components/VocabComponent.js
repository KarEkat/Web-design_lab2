import React, { Component } from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';
import { Media } from 'reactstrap';
import {
    Breadcrumb, BreadcrumbItem,
    Button, Form, FormGroup, Label, Input, Col
} from 'reactstrap';

const required = (val) => val && val.length;


class Vocab extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedWord: null,
            ChineseWord: '',
            EnglishWord: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    onWordSelect(word) {
        this.setState({ selectedWord: word });
    }

    renderWord(word) {
        if (word != null)
            return (
                <Media>
                    {/* <CardImg top src={word.image} alt={word.name} /> */}
                    <Media tag="li">
                        <Media left middle>
                            <Media body className="ml-5">
                                <Media heading>{word.ChineseWord}</Media>
                                <p>{word.EngWord}</p>
                            </Media>
                        </Media>
                    </Media>
                </Media>
            );
        else
            return (
                <div></div>
            );
    }

    render() {
        const Vocab = this.props.words.map((word) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Media key={word.id}
                        onClick={() => this.onWordSelect(word)}>
                        {/* <CardImg width="100%" src={word.image} alt={word.name} /> */}

                        <Media heading>{word.ChineseWord}</Media>
                        <p>{word.EngWorld}</p>

                    </Media>
                </div >
            );
        });

        return (
            <div className="container" >
                <div className="row">
                    {Vocab}
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderWord(this.state.selectedWord)}
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Add new word</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="chineseword" md={2}>Chinese </Label>
                                <Col md={10}>
                                    <Input id="chineseword" name="chineseword"
                                         value={this.state.text}
                                        /* valid={errors.ChineseWord === ''}
                                        invalid={errors.ChineseWord !== ''} */
                                        /* onBlur={this.hadleBlur('ChineseWord')} */
                                        onChange={this.handleChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="Engword" md={2}>English</Label>
                                <Col md={10}>
                                    <Input id="Engword" name="Engword"
                                        value={this.handleChange}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Add word
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                        
                    </div>
                </div>

            </div>
        );
    }
}
export default Vocab;