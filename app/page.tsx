"use client";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Home() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "",
      terms: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Name must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      terms: Yup.array().required("Required"),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <main className="h-screen flex justify-center items-center">
      <form
        onSubmit={formik.handleSubmit}
        className="flex bg-white rounded-lg w-1/2"
      >
        <div className="flex-1 text-gray-700 p-20">
          <h1 className="text-3xl pb-2">Let's get started!</h1>
          <p className=" text-lg text-gray-500">radom tekst</p>
          <div className="mt-6">
            <div className="pb-4">
              <label className="block text-sm pb-2 " htmlFor="name">
                {formik.touched.name && formik.errors.name ? (
                  <span className="text-red-500 text-sm">
                    ({formik.errors.name})
                  </span>
                ) : (
                  "Name"
                )}
              </label>
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:ring-teal-500 focus:border-teal-500"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="pb-4">
              <label className="block text-sm pb-2 " htmlFor="email">
                Email
              </label>
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:ring-teal-500 focus:border-teal-500"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="pb-4">
              <label className="block text-sm pb-2 " htmlFor="country">
                Country
              </label>
              <select
                name="country"
                className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:ring-teal-500 focus:border-teal-500"
                value={formik.values.country}
                onChange={formik.handleChange}
              >
                <option>United Kingdom</option>
                <option>Poland</option>
                <option>Norway</option>
                <option>Denmark</option>
              </select>
            </div>
            <div className="pb-4">
              <label className="block text-sm pb-2 " htmlFor="terms">
                Terms
              </label>
              <div>
                <input
                  className="H-5 w-5 text-teal-500 border-2 focus:border-teal-500 focus:ring-teal-500"
                  type="checkbox"
                  name="terms"
                  value="checked"
                  onChange={formik.handleChange}
                />
                Terms of service
                <p className="text-sm text-gray-500">radom tekst</p>
              </div>
            </div>
            <button
              type="submit"
              className=" bg-teal-500 text-sm text-white py-3 mt-6 rounded-lg w-full"
            >
              Start learning today
            </button>
          </div>
        </div>
        <div className="flex-1 relative object-cover">
          {" "}
          <Image src="/formImage.jpg" alt="Form Image" fill />{" "}
        </div>
      </form>
    </main>
  );
}
