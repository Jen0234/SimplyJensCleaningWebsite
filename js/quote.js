/* =========================================
   SIMPLY JENS CLEANING
   REQUEST A QUOTE PAGE
========================================= */

document.addEventListener("DOMContentLoaded", function () {

  console.log("Quote form loaded");


  /* =========================================
     MAIN SERVICE SELECTION
  ========================================= */

  const serviceSelect = document.getElementById("serviceSelect");
  const residentialFields = document.getElementById("residentialFields");

  const serviceSections = {
    standard: document.getElementById("standardFields"),
    deep: document.getElementById("deepFields"),
    move: document.getElementById("moveFields"),
    housekeeping: document.getElementById("housekeepingFields"),
    airbnb: document.getElementById("airbnbFields"),
    commercial: document.getElementById("commercialFields"),
    custom: document.getElementById("customFields")
  };

  const residentialServices = [
    "standard",
    "deep",
    "move",
    "housekeeping",
    "airbnb",
    "custom"
  ];


  /* =========================================
     SHOW / HIDE FORM SECTIONS SAFELY
  ========================================= */

  function setSectionState(section, show) {
    if (!section) return;

    section.style.display = show ? "block" : "none";

    const fields = section.querySelectorAll(
      "input, select, textarea, button"
    );

    fields.forEach(function (field) {
      field.disabled = !show;
    });
  }


  function hideAllServiceSections() {
    Object.values(serviceSections).forEach(function (section) {
      setSectionState(section, false);
    });

    setSectionState(residentialFields, false);
  }


  /* Hide all conditional fields when page first loads */

  hideAllServiceSections();


  /* =========================================
     DEEP CLEAN FIRST-TIME OFFER ELEMENTS
  ========================================= */

  const firstTimeDeepClient =
    document.getElementById("firstTimeDeepClient");

  const complimentaryApplianceField =
    document.getElementById("complimentaryApplianceField");

  const complimentaryAppliance =
    document.getElementById("complimentaryAppliance");

  setSectionState(complimentaryApplianceField, false);


  /* =========================================
     SERVICE DROPDOWN
  ========================================= */

  if (serviceSelect) {
    serviceSelect.addEventListener("change", function () {
      const selectedService = this.value;

      hideAllServiceSections();

      if (residentialServices.includes(selectedService)) {
        setSectionState(residentialFields, true);
      }

      const selectedSection = serviceSections[selectedService];

      if (selectedSection) {
        setSectionState(selectedSection, true);
      }

      if (firstTimeDeepClient) {
        firstTimeDeepClient.required =
          selectedService === "deep";

        if (selectedService !== "deep") {
          firstTimeDeepClient.value = "";

          setSectionState(
            complimentaryApplianceField,
            false
          );

          if (complimentaryAppliance) {
            complimentaryAppliance.required = false;
            complimentaryAppliance.value = "";
          }
        }
      }
    });
  }


  /* =========================================
     COMMERCIAL BUSINESS TYPE
  ========================================= */

  const businessType =
    document.getElementById("businessType");

  const otherBusinessField =
    document.getElementById("otherBusinessField");

  const otherBusinessType =
    document.getElementById("otherBusinessType");

  setSectionState(otherBusinessField, false);

  if (businessType && otherBusinessField) {
    businessType.addEventListener("change", function () {
      const showOther = this.value === "other";

      setSectionState(otherBusinessField, showOther);

      if (otherBusinessType) {
        otherBusinessType.required = showOther;

        if (!showOther) {
          otherBusinessType.value = "";
        }
      }
    });
  }


  /* =========================================
     FIRST-TIME DEEP CLEAN OFFER
  ========================================= */

  if (
    firstTimeDeepClient &&
    complimentaryApplianceField &&
    complimentaryAppliance
  ) {
    firstTimeDeepClient.addEventListener(
      "change",
      function () {
        const isFirstTime = this.value === "yes";

        setSectionState(
          complimentaryApplianceField,
          isFirstTime
        );

        complimentaryAppliance.required = isFirstTime;

        if (!isFirstTime) {
          complimentaryAppliance.value = "";
        }
      }
    );
  }


  /* =========================================
     HEAVY-DUTY DEEP CLEAN ASSESSMENT
  ========================================= */

  const assessmentFields =
    document.querySelectorAll(".deep-assessment");

  const deepRecommendation =
    document.getElementById("deepRecommendation");

  const deepRecommendationInput =
    document.getElementById(
      "deepRecommendationInput"
    );


  function calculateDeepCleaningRecommendation() {
    if (
      !deepRecommendation ||
      !deepRecommendationInput
    ) {
      return;
    }

    let score = 0;
    let completedQuestions = 0;

    assessmentFields.forEach(function (field) {
      if (field.value !== "") {
        score += Number(field.value);
        completedQuestions++;
      }
    });

    if (completedQuestions === 0) {
      deepRecommendation.className =
        "deep-recommendation";

      deepRecommendation.textContent =
        "Complete the questions above to receive a preliminary service recommendation.";

      deepRecommendationInput.value =
        "Assessment not completed";

      return;
    }

    if (score >= 12) {
      deepRecommendation.className =
        "deep-recommendation heavy-duty-recommendation";

      deepRecommendation.innerHTML = `
        <strong>
          Heavy-Duty Deep Cleaning may be recommended.
        </strong>

        <br>

        Your answers indicate significant buildup or
        additional labour may be required. Please upload
        clear photos so we can review the condition before
        confirming the service and price.
      `;

      deepRecommendationInput.value =
        "Heavy-Duty Deep Cleaning may be required";
    } else {
      deepRecommendation.className =
        "deep-recommendation regular-deep-recommendation";

      deepRecommendation.innerHTML = `
        <strong>
          A regular Deep Cleaning may be suitable.
        </strong>

        <br>

        We will review your answers and any uploaded photos
        before confirming the service and final price.
      `;

      deepRecommendationInput.value =
        "Regular Deep Cleaning may be suitable";
    }
  }


  assessmentFields.forEach(function (field) {
    field.addEventListener(
      "change",
      calculateDeepCleaningRecommendation
    );
  });

   /* =========================================
     CUSTOM CLEANING VALIDATION
  ========================================= */

  const customBaseService =
    document.getElementById("customBaseService");

  const customInstructions =
    document.getElementById("customInstructions");


  if (serviceSelect) {
    serviceSelect.addEventListener(
      "change",
      function () {
        const isCustom =
          this.value === "custom";

        if (customBaseService) {
          customBaseService.required = isCustom;
        }

        if (customInstructions) {
          customInstructions.required = isCustom;
        }
      }
    );
  }


  /* =========================================
     DEEP CLEAN FIELD REQUIREMENTS
  ========================================= */

  const deepRequiredFields = [
    document.getElementById("deepLastClean"),
    document.getElementById("overallBuildup"),
    document.getElementById("kitchenGrease"),
    document.getElementById("bathroomBuildup"),
    document.getElementById("dustLevel")
  ];


  if (serviceSelect) {
    serviceSelect.addEventListener(
      "change",
      function () {
        const isDeep =
          this.value === "deep";

        deepRequiredFields.forEach(function (field) {
          if (field) {
            field.required = isDeep;
          }
        });
      }
    );
  }


  /* =========================================
     STANDARD CLEAN REQUIREMENTS
  ========================================= */

  const standardFrequency =
    document.getElementById("standardFrequency");

  if (serviceSelect && standardFrequency) {
    serviceSelect.addEventListener(
      "change",
      function () {
        standardFrequency.required =
          this.value === "standard";
      }
    );
  }


  /* =========================================
     MOVE-IN / MOVE-OUT REQUIREMENTS
  ========================================= */

  const moveType =
    document.getElementById("moveType");

  const emptyProperty =
    document.getElementById("emptyProperty");

  if (serviceSelect) {
    serviceSelect.addEventListener(
      "change",
      function () {
        const isMove =
          this.value === "move";

        if (moveType) {
          moveType.required = isMove;
        }

        if (emptyProperty) {
          emptyProperty.required = isMove;
        }
      }
    );
  }


  /* =========================================
     HOUSEKEEPING REQUIREMENTS
  ========================================= */

  const housekeepingFrequency =
    document.getElementById(
      "housekeepingFrequency"
    );

  if (
    serviceSelect &&
    housekeepingFrequency
  ) {
    serviceSelect.addEventListener(
      "change",
      function () {
        housekeepingFrequency.required =
          this.value === "housekeeping";
      }
    );
  }


  /* =========================================
     FORM SUBMISSION SAFETY CHECK
  ========================================= */

  const quoteForm =
    document.querySelector(
      ".request-quote-form"
    );

  if (quoteForm) {
    quoteForm.addEventListener(
      "submit",
      function () {

        /*
          Hidden fields are already disabled by
          setSectionState(), so the browser will
          not block submission because of hidden
          required fields.
        */

        console.log(
          "Quote form submission started"
        );
      }
    );
  }

});

/* =========================================
   PRESELECT SERVICE FROM PAGE LINKS
========================================= */

const requestType = document.getElementById("requestType");
const pageParameters = new URLSearchParams(window.location.search);

const requestedService = pageParameters.get("service");
const requestedAction = pageParameters.get("request");

const validServices = [
  "standard",
  "deep",
  "move",
  "housekeeping",
  "airbnb",
  "commercial",
  "custom"
];

const validRequests = [
  "quote",
  "walkthrough",
  "custom",
  "question"
];

if (
  serviceSelect &&
  requestedService &&
  validServices.includes(requestedService)
) {
  serviceSelect.value = requestedService;

  /* Run the existing service-selection code */
  serviceSelect.dispatchEvent(
    new Event("change", { bubbles: true })
  );
}

if (
  requestType &&
  requestedAction &&
  validRequests.includes(requestedAction)
) {
  requestType.value = requestedAction;
}

/* Set a sensible request type when only a service is provided */

if (
  requestType &&
  requestedService &&
  !requestedAction
) {
  requestType.value =
    requestedService === "custom"
      ? "custom"
      : "quote";
}

/* Bring the visitor directly to the form */

if (requestedService || requestedAction) {
  const quoteFormSection =
    document.querySelector(".request-quote-section");

  if (quoteFormSection) {
    setTimeout(function () {
      quoteFormSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 250);
  }
}


  /* =========================================
     PHOTO PREVIEW
  ========================================= */

  const photoUpload =
    document.getElementById("quotePhotos");

  const photoPreview =
    document.getElementById("photoPreview");


  if (photoUpload && photoPreview) {
    photoUpload.addEventListener(
      "change",
      function () {
        photoPreview.innerHTML = "";

        const files = Array.from(this.files);

        if (files.length === 0) {
          return;
        }

        const validFiles = files.filter(function (file) {
          return (
            file.type === "image/jpeg" ||
            file.type === "image/png" ||
            file.type === "image/webp"
          );
        });

        if (validFiles.length === 0) {
          photoPreview.innerHTML = `
            <p class="photo-preview-message">
              Please upload JPG, PNG, or WebP images.
            </p>
          `;

          return;
        }

        validFiles.forEach(function (file) {
          const reader = new FileReader();

          reader.addEventListener(
            "load",
            function (event) {
              const previewItem =
                document.createElement("div");

              previewItem.className =
                "preview-item";

              const image =
                document.createElement("img");

              image.src = event.target.result;
              image.alt = `Preview of ${file.name}`;
              image.className = "preview-image";

              const fileName =
                document.createElement("span");

              fileName.className =
                "preview-file-name";

              fileName.textContent = file.name;

              previewItem.appendChild(image);
              previewItem.appendChild(fileName);
              photoPreview.appendChild(previewItem);
            }
          );

          reader.readAsDataURL(file);
        });
      }
    );
  }