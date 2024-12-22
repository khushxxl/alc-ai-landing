import React from "react";

export default function Copyright() {
  return (
    <div className="min-h-screen p-8 md:p-16 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Copyright Notice</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Use Restrictions</h2>
          <p className="mb-4">Users are prohibited from:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Modifying or copying the materials</li>
            <li>Using the materials for any commercial purpose</li>
            <li>
              Attempting to decompile or reverse engineer any software contained
              in the Alc AI application
            </li>
            <li>
              Removing any copyright or other proprietary notations from the
              materials
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Permission Requests</h2>
          <p>
            For any requests regarding the use of copyrighted materials, please
            contact us at khushaal.choithramani@gmail.com
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Violations</h2>
          <p>
            Any unauthorized use of the materials appearing on Alc AI may
            violate copyright, trademark, and other applicable laws and could
            result in criminal or civil penalties.
          </p>
        </section>

        <p className="text-sm text-gray-500 mt-8">Last updated: Dec 22, 2024</p>
      </div>
    </div>
  );
}
