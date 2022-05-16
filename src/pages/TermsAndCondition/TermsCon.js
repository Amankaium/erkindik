import React from "react";
import "./TermsCon.css";
import {Link} from "react-router-dom";

function TermsCon() {
    return (
        <div className="main">
            <div className="flex-box-terms">
                <div className="h1">Terms and Conditions</div>
                <div className="container-1">
                    <h4 className="article">Article 1. | Definitions</h4>
                    <ol>
                        <li>
                            Online Gallery: Online Galerij B.V., the user of these general terms and conditions, established at Schoolstraat 1,
                            2271BZ in Voorburg, the Netherlands, registered in the Trade Register under Chamber of Commerce number 74764225.
                        </li>
                        <li>
                            User: any natural or legal person who, as an artist, art collector or gallery, has concluded or intends
                            to conclude a User Agreement with Online Gallery.
                        </li>
                        <li>
                            Purchase agreement: any contract of sale between the User and a Buyer that is concluded directly through the Platform's ordering or auction system and which provides for the delivery by the User of one or more Products to the Buyer concerned. Therefore, for the purposes of these general terms and conditions, 'Purchase Agreement' does not mean an agreement between a Buyer and the User which is not concluded by means of the Platform's ordering or auction system, but in the context of which
                            a Buyer has contacted the User directly, whether or not on the basis of the User's contact details stated in or with the Offer.
                        </li>
                        <li>
                            Buyer: any natural or legal person who makes use of the Platform as a (potential) buyer of one or more Products.
                        </li>
                    </ol>
                </div>
                <div className="container-2">
                    <h4 className="article">Article 2. | Definitions</h4>
                    <ol>
                        <li>
                            Online Gallery: Online Galerij B.V., the user of these general terms and conditions, established at Schoolstraat 1,
                            2271BZ in Voorburg, the Netherlands, registered in the Trade Register under Chamber of Commerce number 74764225.
                        </li>
                        <li>
                            User: any natural or legal person who, as an artist, art collector or gallery, has concluded or intends
                            to conclude a User Agreement with Online Gallery.
                        </li>
                        <li>
                            Purchase agreement: any contract of sale between the User and a Buyer that is concluded directly through the Platform's ordering or auction system and which provides for the delivery by the User of one or more Products to the Buyer concerned. Therefore, for the purposes of these general terms and conditions, 'Purchase Agreement' does not mean an agreement between a Buyer and the User which is not concluded by means of the Platform's ordering or auction system, but in the context of which
                            a Buyer has contacted the User directly, whether or not on the basis of the User's contact details stated in or with the Offer.
                        </li>
                        <li>
                            Buyer: any natural or legal person who makes use of the Platform as a (potential) buyer of one or more Products.
                        </li>
                    </ol>
                </div>
                <div className="container-3">
                    <h4 className="article">Article 3. | Definitions</h4>
                    <ol>
                        <li>
                            Online Gallery: Online Galerij B.V., the user of these general terms and conditions, established at Schoolstraat 1,
                            2271BZ in Voorburg, the Netherlands, registered in the Trade Register under Chamber of Commerce number 74764225.
                        </li>
                        <li>
                            User: any natural or legal person who, as an artist, art collector or gallery, has concluded or intends
                            to conclude a User Agreement with Online Gallery.
                        </li>
                        <li>
                            Purchase agreement: any contract of sale between the User and a Buyer that is concluded directly through the Platform's ordering or auction system and which provides for the delivery by the User of one or more Products to the Buyer concerned. Therefore, for the purposes of these general terms and conditions, 'Purchase Agreement' does not mean an agreement between a Buyer and the User which is not concluded by means of the Platform's ordering or auction system, but in the context of which
                            a Buyer has contacted the User directly, whether or not on the basis of the User's contact details stated in or with the Offer.
                        </li>
                        <li>
                            Buyer: any natural or legal person who makes use of the Platform as a (potential) buyer of one or more Products.
                        </li>
                    </ol>
                </div>
            </div>
            <div className="flex-box-sell-art">
                <h4>
                    Sell your atr online!
                </h4>
                <p>
                - Cheaper, faster and better than your own website!
                </p>
                <p>
                - Create your own artist page
                </p>
                <p>
                - Direct contact with Artbuyers
                </p>
                <p>
                - NO commission over sold work!
                </p>
                <button><Link to="/register" className="btn">Register now</Link></button>
            </div>
        </div>
    )
}

export default TermsCon;
