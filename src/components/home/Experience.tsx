import React from "react";
import Container from "./Container";

const Experience = () => {
  return (
    <Container head="Experience">
      <div className="flex w-full bg-white rounded-xl shadow-xl p-9">
        <div>
          <h3 className="text-primary-500 font-semibold text-2xl w-full">
            Frontend Developer Intern
          </h3>
          <div>
            <h4 className="font-semibold">Void Nepal Pvt. Ltd.</h4>
            <ul className="list-disc">
              <li>
                Contributed to the development and enhancement of user
                interfaces using React and Next.js, focusing on creating
                responsive and user-friendly designs.
              </li>
              <li>
                Demonstrated strong technical skills in frontend development,
                with a deep understanding of React, Next.js, and modern
                development principles.
              </li>
              <li>
                Quickly learned and applied new technologies, showing
                adaptability and a commitment to continuous improvement.
              </li>
              <li>
                Collaborated with the team to tackle challenges and deliver
                high-quality projects, consistently meeting deadlines and
                project requirements.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Experience;
