import styled from '@emotion/styled';
import Layout from '../components/Layout';
import StyledTable from '../components/StyledTable';
import { CardButtonSnippet } from '../components/CodeSnippets';
import { Card } from 'modulo-ui';


const CardDetail = styled.div`
    border: 1px solid gray;
    border-radius: 5px;
    padding: 2rem;
    margin: 1.3em 0;

    & h1, h2, h3 {
        text-align: left;
    }

`;
const CardDisplay = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 1em;
    margin: 1.5em 0;

`;
const CardContrast = styled.span`
    display: flex;
    background-color: lightgray;
    padding: .5em 10em;
    margin-top: 1.5em;
    border-radius: 5px;

`;

const Cards =() => {
    const CardLabel1 = ['learn more']
    const Cardlabels2 = ['buy now', 'shop more']

    return (
        <Layout>
            <section>
                <h2>Cards</h2>
                <h4>Cards contain content about a single subject.</h4>
                <CardDetail>
                    <Card 
                        Title='Card Component'
                        Subtitle='Add Text, Images, and Links'
                        Description='Cards are designed to have a consistent look and feel, making it easy to present data in a neat and organized manner. They are building block for creating visually appealing containers that hold and present information in a structured way.'
                        CardStyle='shadow'
                        Image
                        ImageSrc='https://i.imgur.com/fmgwvlf.jpg'
                        ImageAlt='photo of colorful graffitti'
                        Divider
                        ImageCaption='Photo by Mateo Krössler on Unsplash'  
                    />
                </CardDetail>
                <CardDetail>
                    <CardDisplay>
                        <Card 
                            CardStyle='border'
                            Image
                            ImageCaption='Word of the Day'
                            Title='Bellwether'
                            Subtitle='BEL-WEH-ther'
                            Description='Bellwether refers to someone or something that leads others or shows what will happen in the future—in other words, a leader or a trendsetter.'
                            Buttons
                            ButtonLabel={CardLabel1}
                            Style='link'
                        />
                        <Card 
                            CardStyle='shadow'
                            Image
                            ImageCaption='Word of the Day'
                            Title='Bellwether'
                            Subtitle='BEL-WEH-ther'
                            Description='Bellwether refers to someone or something that leads others or shows what will happen in the future—in other words, a leader or a trendsetter.'
                            Buttons
                            ButtonLabel={CardLabel1}
                            Style='link'
                        />
                    </CardDisplay>
                    <p>The card can be displayed with the border, shadow, or standard CardStyle. (h/t Material UI for the dictionary card idea)</p>
                    <hr />
                    <CardContrast>
                        <Card 
                            Image
                            ImageCaption='Word of the Day'
                            Title='Bellwether'
                            Subtitle='BEL-WEH-ther'
                            Description='Bellwether refers to someone or something that leads others or shows what will happen in the future—in other words, a leader or a trendsetter.'
                            Buttons
                            ButtonLabel={CardLabel1}
                            Style='link'
                        />
                        </CardContrast>
                    <p>The Standard CardStyle has no outer design and should be used against a contrasting background.</p>
                </CardDetail>
                <CardDetail>       
                    <CardDisplay>         
                        <Card 
                            Image
                            ImageSrc='https://i.imgur.com/AmICiYu.jpg'
                            ImageCaption='Photo by Rabie Madaci on Unsplash'
                            ImageAlt='a photo of an orange chair'
                            Divider
                            CardStyle='shadow'
                            Title='Chair'
                            Subtitle='This is a Cool Chair'
                            Description='Sitting on this orange chair is going to change your life'
                            Buttons
                            Size='small'
                            ButtonLabel={Cardlabels2}
                        />
                        <Card 
                            Image
                            ImageSrc='https://i.imgur.com/DbKcIhU.jpg'
                            ImageCaption='Photo by Phillip Goldsberry on Unsplash'
                            ImageAlt='a photo of a green fabric sofa'
                            Divider
                            CardStyle='shadow'
                            Title='Sofa'
                            Subtitle='What a Nice Sofa'
                            Description="You want to take a nap on this sofa, don't you?"
                            Buttons
                            Size='small'
                            ButtonLabel={Cardlabels2}
                        />
                        </CardDisplay> 
                    <p>Pass the Buttons prop and dynamically add one or two buttons from the button component to create links for any purpose.</p>
                    <CardButtonSnippet />
                </CardDetail>
                <h3>Card Props</h3>
                <StyledTable>
                    <thead>
                        <tr>
                            <th>Property</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Default</th>
                            <th>Options</th>

                        </tr>
                    </thead>
                        <tbody>
                            <tr>
                                <td>CardStyle</td>
                                <td>Outer design for the card component</td>
                                <td>string</td>
                                <td>standard</td>
                                <td>standard, border, shadow</td>
                            </tr>
                            <tr>
                                <td>Image</td>
                                <td>Add an image to the card</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>ImageSrc</td>
                                <td>src for the card's img</td>
                                <td>string</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>ImageAlt</td>
                                <td>alt text for the card's img</td>
                                <td>string</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>ImageCaption</td>
                                <td>Text area for image caption or for other information</td>
                                <td>string</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Divider</td>
                                <td>Adds a contrasting hr element beneath the image</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Title</td>
                                <td>Text area for title or other important info</td>
                                <td>string</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Subtitle</td>
                                <td>Text area for subtitle or other important info</td>
                                <td>string</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Description</td>
                                <td>Text area for description or other supporting info</td>
                                <td>string</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>Buttons</td>
                                <td>Add one or two buttons from the button component</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>ButtonLabel</td>
                                <td>Dynamically add buttons by adding a label</td>
                                <td>string</td>
                                <td>-</td>
                                <td>one or two labels</td>
                            </tr>
                            <tr>
                                <td>Style*</td>
                                <td>Overall style of the button</td>
                                <td>string</td>
                                <td>solid</td>
                                <td>solid, outline, ghostHover, link</td>
                            </tr>
                            <tr>
                                <td>Color*</td>
                                <td>Pre-styled color themes</td>
                                <td>string</td>
                                <td>indigo</td>
                                <td>red, pink, orange, yellow, green, teal, blue, cyan, indigo, purple, gray, black, white</td>
                            </tr>
                            <tr>
                                <td>Size*</td>
                                <td>Controls font-size and padding only</td>
                                <td>string</td>
                                <td>medium</td>
                                <td>small, medium, large</td>
                            </tr>
                            <tr>
                                <td>onClick</td>
                                <td>Handles click event</td>
                                <td>event: (index: number) ={'>'} void</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td colSpan={5}>
                                *Please note the name differences for size, style, etc props in the parent component vs the button component.
                                </td>
                            </tr>
                        </tbody>
                </StyledTable>
            </section>

        </Layout>
    )
}
export default Cards