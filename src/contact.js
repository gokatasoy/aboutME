import React from 'react';

const ContactForm = () => {
    return (
        <body class="contact_page">

            <nav class="navbar navbar-expand-md py-3">
                <div class="container">
                    <a class="logo" href="index.html">Seyfi SUSUZ</a>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="cv.html">CV</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="myCity.html">My City</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="ourLegacy.html">Legacy</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="myInterest.html">Interests</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link page_active" href="contact.html">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="login.html">Login</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div class="main_content">
                <div class="contact_grid">
                    <div class="card px-3" style="max-width: 900px;">
                        <div class="row">
                            <div class="card-title text-center">
                                <h2 class="mt-4">
                                    Contact With ME!
                                </h2>
                            </div>
                            <div class="card-body">
                                <form action="contact.php" method="post">
                                    <div class="row my-3">
                                        <div class="col-sm-6">
                                            <label for="name" class="form-label">Name</label>
                                            <input type="text" class="form-control" id="name" name="name">
                                        </div>
                                        <div class="col-sm-6">
                                            <label for="surname" class="form-label">Surname</label>
                                            <input type="text" class="form-control" id="surname" name="surname">
                                        </div>
                                    </div>
                                    <div class="row my-3">
                                        <div class="col-sm-6">
                                            <label for="email" class="form-label">E-mail</label>
                                            <input placeholder="@gmail.com" type="email" class="form-control" id="email" name="email">
                                        </div>
                                        <div class="col-sm-6">
                                            <label for="phone" class="form-label">Password</label>
                                            <input type="password" class="form-control" id="password" name="password">
                                        </div>
                                    </div>
                                    <div class="row my-3">
                                        <div class="col-sm-6">
                                            <label for="city" class="form-label">City</label>
                                            <input type="text" class="form-control" id="city" name="city">
                                        </div>
                                        <div class="col-sm">
                                            <label for="state" class="form-label">State</label>
                                            <select class="form-select" id="autoSizingSelect" name="state">
                                                <option selected>Choose...</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div class="col-sm">
                                            <label for="zip" class="form-label">Zip Code</label>
                                            <input type="number" class="form-control" id="zip" name="zip">
                                        </div>
                                    </div>
                                    <div class="row my-3">
                                        <div class="col-sm-12">
                                            <label for="address" class="form-label">Address</label>
                                            <textarea id="address" class="form-control" name="address"></textarea>
                                        </div>
                                    </div>
                                    <div class="row my-3">
                                        <div class="col-sm-12">
                                            <label for="message-area" class="form-label">Message</label>
                                            <textarea id="message" class="form-control" name="message" rows="5"
                                                placeholder="Type your message here.."></textarea>
                                        </div>
                                    </div>
                                    <div class="row my-3  text-center">
                                        <div class="col-sm-12">
                                            <button class="btn btn-primary btn-lg col-sm-3" type="submit">Submit</button>
                                            <button class="btn btn-danger btn-lg col-sm-3" type="reset">Clear</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <div class="container">
                    <div class="row text-center">
                        <div class="col-sm-4">
                            <h6>Address</h6>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.894500939616!2d30.323285315405883!3d40.74234687932866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ccaded70ee240b%3A0xd81085b5551312fd!2sBilgisayar%20Ve%20Bili%C5%9Fim%20Bilimleri%20Fak%C3%BCltesi!5e0!3m2!1str!2str!4v1689771950496!5m2!1str!2str" width="400" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div class="col-sm">
                            <h6>About Us</h6>
                            <ul class="list_group">
                                <li class="list-group-item">Lorem, ipsum.</li>
                                <li class="list-group-item">Lorem, ipsum.</li>
                                <li class="list-group-item">Lorem, ipsum.</li>
                                <li class="list-group-item">Lorem, ipsum.</li>
                            </ul>
                        </div>
                        <div class="col-sm">
                            <h6>Products</h6>
                            <ul class="list_group">
                                <li class="list-group-item">Lorem, ipsum.</li>
                                <li class="list-group-item">Lorem, ipsum.</li>
                                <li class="list-group-item">Lorem, ipsum.</li>
                                <li class="list-group-item">Lorem, ipsum.</li>
                            </ul>
                        </div>
                        <div class="col-sm">
                            <h6>Pricing</h6>
                            <ul class="list_group">
                                <li class="list-group-item">Lorem, ipsum.</li>
                                <li class="list-group-item">Lorem, ipsum.</li>
                                <li class="list-group-item">Lorem, ipsum.</li>
                                <li class="list-group-item">Lorem, ipsum.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
                crossorigin="anonymous"></script>
        </body>
    );
};

export default ContactForm;
