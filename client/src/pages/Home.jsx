import React from 'react'
import { useState } from 'react'
import { Drawer, Button, Grid } from '@mantine/core';
import { useForm } from '@mantine/form';
import { NumberInput, TextInput, Stepper, Group, PasswordInput, Code } from '@mantine/core';
import Footer from './Footer';


export default function Home() {
  const [opened, setOpened] = useState(false);
  const [active, setActive] = useState(0);

  const form = useForm({
    initialValues: {
      username: '',
      password: '',
      name: '',
      email: '',
      website: '',
      github: '',
    },

    validate: (values) => {
      if (active === 0) {
        return {
          username:
            values.username.trim().length < 6
              ? 'Username must include at least 6 characters'
              : null,
          password:
            values.password.length < 6 ? 'Password must include at least 6 characters' : null,
        };
      }

      if (active === 1) {
        return {
          name: values.name.trim().length < 2 ? 'Name must include at least 2 characters' : null,
          email: /^\S+@\S+$/.test(values.email) ? null : 'Invalid email',
        };
      }

      return {};
    },
  });


  const nextStep = () =>
    setActive((current) => {
      if (form.validate().hasErrors) {
        return current;
      }
      return current < 3 ? current + 1 : current;
    });

  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));


  return (
    <div>
      <Drawer
        position='left'
        opened={opened}
        onClose={() => setOpened(false)}
        title="Register"
        padding="xl"
        size="md"
      >
        <p>Tolga</p>
      </Drawer>

      <header className="text-gray-700 body-font border-gray-200">
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="https://tailblocks.cc" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Rust Based</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">First Link</a>
          </nav>
          <button onClick={() => setOpened(true)} className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">Menu
          </button>
        </div>
      </header>

      <div className="text-gray-700 body-font border-t border-gray-200 h-screen">
        <div className="container px-12 py-3 mx-auto">
          <div className="flex flex-col text-center w-full">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Welcome</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
          </div>
          <div className="flex flex-wrap -m-2 mt-8">
            <div className="p-2 w-full">
              <div className="h-full flex items-center border-gray-200 border mr-36 ml-36 p-12 rounded-lg">
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium text-center">Holden Caulfield</h2>

                  <Stepper active={active} breakpoint="sm">
                    <Stepper.Step label="First step" description="Profile settings">
                      <TextInput label="Username" placeholder="Username" {...form.getInputProps('username')} />
                      <PasswordInput
                        mt="md"
                        label="Password"
                        placeholder="Password"
                        {...form.getInputProps('password')}
                      />
                    </Stepper.Step>

                    <Stepper.Step label="Second step" description="Personal information">
                      <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
                      <TextInput mt="md" label="Email" placeholder="Email" {...form.getInputProps('email')} />
                    </Stepper.Step>

                    <Stepper.Step label="Final step" description="Social media">
                      <TextInput label="Website" placeholder="Website" {...form.getInputProps('website')} />
                      <TextInput
                        mt="md"
                        label="GitHub"
                        placeholder="GitHub"
                        {...form.getInputProps('github')}
                      />
                    </Stepper.Step>
                    <Stepper.Completed>
                      Completed! Form values:
                      <Code block mt="xl">
                        {JSON.stringify(form.values, null, 2)}
                      </Code>
                    </Stepper.Completed>
                  </Stepper>

                  <Group position="right" mt="xl">
                    {active !== 0 && (
                      <Button variant="default" onClick={prevStep}>
                        Back
                      </Button>
                    )}
                    {active !== 3 && <Button onClick={nextStep}>Next step</Button>}
                  </Group>

                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="text-gray-700 body-font border-gray-200">
          <div className="container px-5 py-20 mx-auto">
            <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed text-lg">Edison bulb retro cloud bread echo park, helvetica linking vinegar.</p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
              <p className="text-gray-500">Senior Product Designer</p>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <a href="https://github.com" className="rounded-full w-12 h-12 bg-gray-100 fixed bottom-0 right-0 flex items-center justify-center text-gray-800 mr-8 mb-8 shadow-sm border-gray-300 border" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg></a>

    </div>
  )
}
