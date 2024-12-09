'use client';

import {useState} from 'react';

import Image from 'next/image';
// import SelectCountry from "./SelectCountry";
import {updateGuest} from '@/app/_lib/actions';
import SubmitButton from '@/app/_components/SubmitButton';

function UpdateProfileForm({guest, children}) {
    const [count, setCount] = useState();
    const {fullName, email, nationality, nationalID, countryFlag} = guest;
    // console.log('full:', fullName, email, nationality, countryFlag, nationalID);
    // const countryFlag = "/in.jpg";

    return (
        <form action={updateGuest} className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col">
            <div className="space-y-2">
                <label>Full name</label>
                <input
                    disabled
                    name={fullName}
                    defaultValue={fullName}
                    className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
                />
            </div>

            <div className="space-y-2">
                <label>Email address</label>
                <input
                    disabled
                    defaultValue={email}
                    name={email}
                    className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
                />
            </div>

            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <label htmlFor="nationality">Where are you from?</label>
                    <Image
                        src={countryFlag}
                        width={20}
                        height={20}
                        alt="Country flag"
                        className="h-5 rounded-sm"
                    />
                </div>

                {/* <SelectCountry
          name="nationality"
          id="nationality"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          defaultCountry={nationality}
        /> */}
                {children}
            </div>

            <div className="space-y-2">
                <label htmlFor="nationalID">National ID number</label>
                <input
                    name="nationalID"
                    defaultValue={nationalID}
                    className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
                />
            </div>

            <div className="flex justify-end items-center gap-6">
                <SubmitButton pendingLabel={'Updating...'}>Update Profile</SubmitButton>
            </div>
        </form>
    );
}


export default UpdateProfileForm;