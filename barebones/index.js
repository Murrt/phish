<>
    <head>
        <link rel="stylesheet" href="styles.css" />
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <section className='bg'>
        <div class="flex justify-center items-center min-h-screen min-w-screen w-full">
            <div class="w-full sm:w-7/12 md:w-5/12 lg:w-4/12 xl:w-3/12 mb-16 p-9 sm:shadow-lg h-screen sm:h-auto login">
                <div class="">
                    <img class="logo" role="img"
                        pngsrc="https://aadcdn.msauth.net/shared/1.0/content/images/microsoft_logo_ed9c9eb0dce17d752bedea6b5acda6d9.png"
                        svgsrc="https://aadcdn.msauth.net/shared/1.0/content/images/microsoft_logo_ee5c8d9fb6248c938fd0dc19370e90bd.svg"
                        data-bind="imgSrc, attr: { alt: str['MOBILE_STR_Footer_Microsoft'] }"
                        src="https://aadcdn.msauth.net/shared/1.0/content/images/microsoft_logo_ee5c8d9fb6248c938fd0dc19370e90bd.svg"
                        alt="Microsoft" />
                    <h2 class="mt-5  title">Sign in</h2>
                </div>
                <form class="mt-2" method="POST">
                    <input type="hidden" name="remember" value="true" />
                    <div class="-space-y-px rounded-md shadow-sm">
                        <div>
                            <label for="email-address" class="sr-only">Email address</label>
                            <input id="email-address" name="email" type="email" autocomplete="email" required
                                class="relative block w-full  py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                placeholder="Email, phone, or Skype" />
                        </div>
                    </div>

                    <div class="flex-wrap items-center justify-between mt-3 ">
                        <div class="w-max link">
                            No account? <a href="#" class="font-small">create one!</a>
                        </div>
                        <div class="w-max text-sm mt-3">
                            <a href="#" class="font-small">Cant access your account?</a>
                        </div>
                    </div>
                    <div class='flex float-right mt-3'>
                        <div>
                            <button type="submit" class="relative back primary flex justify-center py-1 px-1 mr-1">
                                Back
                            </button>
                        </div>
                        <div>
                            <button type="submit" class="flex next secondary justify-center py-1 px-1 ">
                                Next
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div class='footur flex space-x-2'><div>Terms of use</div><div> Privacy & cookies</div></div>
    </section>
</>

