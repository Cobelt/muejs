import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './styles/muejs.styl';

import {Grid, GridElement, Row} from './components/containers/Grid';
import {Navbar, NavIcon, NavLabel, NavLogo} from './components/containers/Navbar';
import { Body, BodyElement } from './components/containers/Body';
import { Footer, FooterLine, FooterList, FooterSeparator } from './components/containers/Footer';

import { Card, CardDescription, CardImage, CardFooter } from './components/containers/Card';
import { Product, ProductDescription, ProductImage, ProductInfo, ProductTitle } from './components/containers/Product';
import Checkbox from "./components/ui/Checkbox";
import RadioButton from "./components/ui/RadioButton";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { borderMenuOpened: false, radioChecked: null, checkboxChecked: null };
    }

    handleChange (e) {
        if (e.target.name === "radiotest")
            this.setState({ radioChecked: e.target.value });
        else if (e.target.name === "checkboxtest")
            this.setState({ checkboxChecked: e.target.value });
    }

    handleBorderMenuClick() {
        this.setState((prevState) => ({ borderMenuOpened: !prevState.borderMenuOpened }));
    }

    render() {
        const { borderMenuOpened, radioChecked } = this.state;
        return (
            <Grid rowsTemplate={"auto 1fr auto"}>
                <Row>
                    <Navbar>
                        <NavLogo justify="left">MueJS</NavLogo>
                        <NavLabel justify="right" label="cobelt.fr" route="http://cobelt.fr"/>
                        <NavLabel justify="right" label="Ophis" route="http://ophis.cobelt.fr"/>
                        <NavIcon justify="right" route="http://github.com/cobelt" icon="github" svg />
                        <NavIcon className="border-menu-icon" justify="right" icon="menu" onClick={() => this.handleBorderMenuClick()} />
                    </Navbar>
                </Row>
                <GridElement row={2} style={{ width: borderMenuOpened? '5rem' : '0rem', backgroundColor: '#c75532' }} />
                <GridElement col={2} row={2}>
                    <Body className="container">
                        <BodyElement width={2}>
                            <img className="rotate-anim" style={{ borderRadius: '5rem', opacity: 0.95 }} src="https://scontent-mrs1-1.xx.fbcdn.net/v/t1.0-9/27657401_345144665967876_135324906561244726_n.jpg?_nc_cat=0&oh=2c80a6ea78d641500a9ef283ba49be57&oe=5C39382D" />
                        </BodyElement>
                        <BodyElement row={2} width={2}>
                            <Product style={{ backgroundColor: '#c75532', color: 'white' }}>
                                <ProductInfo>
                                    <ProductTitle style={{ color: 'white' }}>PROMO EXCLUSIVE</ProductTitle>
                                    <ProductDescription>Jusqu'au <strong>mardi 18 septembre 23h59</strong>, profitez de <h5>2</h5> tacos taille <h5>L</h5> pour seulement <h4>9€99</h4> ! Ne perdez pas une si belle occasion de vous sustenter avec un met excellent !</ProductDescription>
                                </ProductInfo>
                                <ProductImage className="banner" col={2} src="https://static-pepper.dealabs.com/threads/thread_full_screen/default/1165611_1.jpg" />
                            </Product>
                        </BodyElement>
                        <BodyElement row={3} col={1}>
                            <Product>
                                <ProductInfo>
                                    <ProductTitle align={"right"}>TACOS</ProductTitle>
                                    <ProductDescription align={"right"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</ProductDescription>
                                </ProductInfo>
                                <ProductImage col={2} src="http://mustikebab.com/wp-content/uploads/2016/02/Tacos-Kebab-musti-kebab.jpg" />
                            </Product>
                        </BodyElement>
                        <BodyElement row={3} col={2}>
                            <Product>
                                <ProductImage src="https://i.redd.it/2t68z42blebz.jpg" />
                                <ProductInfo col={2}>
                                    <ProductTitle>BUCHETTE</ProductTitle>
                                    <ProductDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</ProductDescription>
                                </ProductInfo>
                            </Product>
                        </BodyElement>
                        <BodyElement row={4} width={2}>
                            <Product>
                                <ProductImage src="https://restomalin.com/domaine/le-tacos-de-grenoble.fr/images/image4_tacos_de_grenoble.PNG" />
                                <ProductInfo col={2}>
                                    <ProductTitle>Nos nouveautés</ProductTitle>
                                    <ProductDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</ProductDescription>
                                </ProductInfo>
                            </Product>
                        </BodyElement>
                        <BodyElement className="flow-column gap-column-5" row={5} height={2} width={1} style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>

                                <RadioButton name="radiotest" value="man" checked={radioChecked === "man"} onChange={(e) => this.handleChange(e)} label="Man" />
                                <RadioButton name="radiotest" value="woman" checked={radioChecked === "woman"} onChange={(e) => this.handleChange(e)} label="Woman" />
                                <RadioButton name="radiotest" value="unbinary" checked={radioChecked === "unbinary"} onChange={(e) => this.handleChange(e)} label="Unbinary" />

                                <Checkbox name="checkboxtest" value="tacos" defaultChecked={false} onChange={(e) => this.handleChange(e)} label="Tacos" />

                        </BodyElement>
                        <BodyElement row={5} col={2} width={1}>
                            <Product>
                                <ProductInfo>
                                    <ProductTitle>Commandez désormais en ligne !</ProductTitle>
                                    <ProductDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</ProductDescription>
                                </ProductInfo>
                            </Product>
                        </BodyElement>
                        <BodyElement row={6} col={2} width={1}>
                            <Product>
                                <ProductInfo col={2}>
                                    <ProductTitle>Ou appelez-nous</ProductTitle>
                                    <ProductDescription>Au 07 xx xx xx xx.</ProductDescription>
                                </ProductInfo>
                                <ProductImage style={{ maxHeight: '15rem', objectFit: 'contain', padding: '2rem' }} src="https://cdn.pixabay.com/photo/2017/06/05/18/59/phone-2374915_960_720.png" />
                            </Product>
                        </BodyElement>
                    </Body>
                </GridElement>
                <GridElement row={2} col={3} style={{ width: borderMenuOpened? '5rem' : '0rem', backgroundColor: '#c75532' }} />
                {/*<GridElement row={2} col={2}>*/}
                    {/*<Body className="container">*/}
                        {/*<BodyElement>*/}
                        {/*</BodyElement>*/}
                        {/*<BodyElement width={2}>*/}
                            {/*<Card>*/}
                                {/*<CardImage src="https://www.zoomalia.com/blogz/150/l_mue-du-lezard.jpg"/>*/}
                                {/*<CardDescription><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></CardDescription>*/}
                                {/*<CardFooter><p>More to come...</p><a href="https://twitter.com/">twitwi</a></CardFooter>*/}
                            {/*</Card>*/}
                        {/*</BodyElement>*/}
                        {/*<BodyElement col={3} width={2}>*/}
                            {/*<Card>*/}
                                {/*<CardImage src="https://www.zoomalia.com/blogz/150/l_mue-du-lezard.jpg"/>*/}
                                {/*<CardDescription><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></CardDescription>*/}
                                {/*<CardFooter><p>More to come...</p><a href="https://twitter.com/">twitwi</a></CardFooter>*/}
                            {/*</Card>*/}
                        {/*</BodyElement>*/}
                        {/*<BodyElement col={5} width={2}>*/}
                            {/*<Card>*/}
                                {/*<CardImage src="https://www.zoomalia.com/blogz/150/l_mue-du-lezard.jpg"/>*/}
                                {/*<CardDescription><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></CardDescription>*/}
                                {/*<CardFooter><p>More to come...</p><a href="https://twitter.com/">twitwi</a></CardFooter>*/}
                            {/*</Card>*/}
                        {/*</BodyElement>*/}
                        {/*<BodyElement col={7} width={2}>*/}
                            {/*<Card>*/}
                                {/*<CardImage src="https://www.zoomalia.com/blogz/150/l_mue-du-lezard.jpg"/>*/}
                                {/*<CardDescription><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></CardDescription>*/}
                                {/*<Footer><p>More to come...</p><a href="https://twitter.com/">twitwi</a></Footer>*/}
                            {/*</Card>*/}
                        {/*</BodyElement>*/}
                        {/*<BodyElement col={2} width={6} className="bg-info">*/}
                            {/*<h1 className="h-align-center">Information</h1>*/}
                        {/*</BodyElement>*/}
                        {/*<BodyElement width={3}>*/}
                            {/*<Product>*/}
                                {/*<ProductImage src="https://i.redd.it/2t68z42blebz.jpg" />*/}
                                {/*<ProductInfo col={2}>*/}
                                    {/*<ProductTitle>Python Regius</ProductTitle>*/}
                                    {/*<ProductDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</ProductDescription>*/}
                                {/*</ProductInfo>*/}
                            {/*</Product>*/}
                        {/*</BodyElement>*/}
                        {/*<BodyElement col={6} width={3}>*/}
                            {/*<Product reverted>*/}
                                {/*<ProductInfo>*/}
                                    {/*<ProductTitle>Python Regius</ProductTitle>*/}
                                    {/*<ProductDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</ProductDescription>*/}
                                {/*</ProductInfo>*/}
                                {/*<ProductImage col={2} src="https://i.redd.it/2t68z42blebz.jpg" />*/}
                            {/*</Product>*/}
                        {/*</BodyElement>*/}
                        {/*<BodyElement col={2} width={3}>*/}
                            {/*<Product reverted>*/}
                                {/*<ProductInfo>*/}
                                    {/*<ProductTitle>Python Regius</ProductTitle>*/}
                                    {/*<ProductDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</ProductDescription>*/}
                                {/*</ProductInfo>*/}
                                {/*<ProductImage col={2} src="https://i.redd.it/2t68z42blebz.jpg" />*/}
                            {/*</Product>*/}
                        {/*</BodyElement>*/}
                        {/*<BodyElement width={3}>*/}
                            {/*<Product>*/}
                                {/*<ProductImage src="https://i.redd.it/2t68z42blebz.jpg" />*/}
                                {/*<ProductInfo col={2}>*/}
                                    {/*<ProductTitle>Python Regius</ProductTitle>*/}
                                    {/*<ProductDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</ProductDescription>*/}
                                {/*</ProductInfo>*/}
                            {/*</Product>*/}
                        {/*</BodyElement>*/}
                    {/*</Body>*/}
                {/*</GridElement>*/}
                <Row row={3}>
                    <Footer columnsTemplate={"0.55fr 0.55fr 0.4fr 0.4fr 0.55fr 0.55fr"}>
                        <FooterList row={1} col={1} width={2}>
                            <h5>Who am I ?</h5>
                            <p style={{ textAlign: 'left' }}>
                                Hi ! I'm Paul / Cobelt, I'm a french 19 y.o. web developer.<br />
                                I'm in love with WebDesign and JS/React, I take a lot of fun creating websites with those technologies.<br />
                                I currently work at Artprice, a french company near from Lyon, as a junior Full-Stack developer
                            </p>
                        </FooterList>

                        <FooterList className="donation" row={1} col={3} width={2}>
                            <h5>Donation</h5>
                            <p>If you like my work and want to support me, you can do it here :</p>
                            <FooterLine>
                                <a href="https://www.tipeee.com/cobelt">Tipeee</a>
                                <a href="https://www.utip.io">U-Tip</a>
                                <a href="https://www.twitch.tv/cobeltdierk">Twitch</a>
                            </FooterLine>
                        </FooterList>

                        <FooterList className="social" row={1} col={5} width={2}>
                            <h5>What do I do ?</h5>
                            <p style={{ textAlign: 'right' }}>
                                Websites. I'm creating a react framework, MueJS, to create them easier.
                            </p>
                            <FooterLine row={1}>
                                <a href="http://cobelt.fr">cobelt.fr</a>
                                <a href="http://karyt.fr">karyt.fr</a>
                            </FooterLine>
                        </FooterList>

                        <FooterSeparator row={2} col={2} width={4} />

                        <FooterLine row={3}>
                            <a>Facebook</a>
                            <a href="https://www.youtube.com/channel/UC7rRGEAXomdP_iUCC0LV3Ag/live">Youtube</a>
                            <a href="https://twitter.com/cobelt_dierk">Twitter</a>
                            <a href="https://www.instagram.com/cobelt_dierk">Instagram</a>
                            <a href="http://github.com/cobelt">Github</a>
                        </FooterLine>
                    </Footer>
                </Row>
            </Grid>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));