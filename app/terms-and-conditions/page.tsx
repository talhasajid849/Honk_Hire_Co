import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vehicle Rental Terms & Conditions | Honk Hire Co",
  description:
    "Terms and conditions for car and scooter rentals with Honk Hire Co, Sunshine Coast QLD.",
};

const KEY_TERMS = [
  { label: "Security deposit", scooters: "$300", cars: "$500" },
  { label: "Minimum hire", scooters: "2 weeks", cars: "2 weeks" },
  {
    label: "Payment",
    scooters: "1 week upfront; weekly in advance",
    cars: "1 week upfront; weekly in advance via Stripe",
  },
  { label: "Included kilometres", scooters: "500 km/week", cars: "1,000 km/week" },
  { label: "Excess kilometres", scooters: "$0.23/km", cars: "$0.30/km" },
  {
    label: "Standard damage liability",
    scooters: "Subject to applicable terms / insurance",
    cars: "$1,000 per incident*",
  },
  { label: "Additional driver", scooters: "Prior approval", cars: "$25/week" },
  {
    label: "Delivery / collection",
    scooters: "Current scooter pricing",
    cars: "$100 within 20 km; further quoted",
  },
];

const CAR_SCHEDULE = [
  { item: "Weekly rate", value: "As stated in booking / Rental Schedule" },
  { item: "Minimum hire", value: "2 weeks" },
  { item: "Security deposit", value: "$500 — security only; not a liability cap" },
  { item: "Standard damage liability", value: "$1,000 per incident, subject to insurer confirmation" },
  { item: "Included distance", value: "1,000 km per week" },
  { item: "Excess distance", value: "$0.30 per km" },
  { item: "Additional approved driver", value: "$25 per week" },
  { item: "Delivery / collection", value: "$100 within 20 km, subject to availability; further distances quoted" },
  { item: "Delivery work", value: "Permitted only where declared and approved; insurance conditions may apply" },
  { item: "Passenger rideshare", value: "Not permitted unless later approved in writing" },
  { item: "General cleaning", value: "$120 where applicable" },
  { item: "Smoking / vaping remediation", value: "$500 where applicable" },
  { item: "Lost / damaged key", value: "Reasonable actual replacement/programming/locksmith/recovery cost" },
  { item: "Fine / infringement administration", value: "$10 per infringement processed" },
  { item: "Toll administration", value: "$10 per toll processing event plus toll" },
  { item: "Termination after minimum", value: "14 days' written notice" },
  { item: "Recurring payment method", value: "Stripe / approved payment method" },
];

function KeyTermsTable() {
  return (
    <>
      <div className="mt-8 overflow-x-auto rounded-2xl border border-[var(--border)]">
        <table className="w-full min-w-[560px] border-collapse text-sm">
          <thead>
            <tr className="bg-[var(--surface-elevated)] text-left">
              <th className="px-4 py-3 font-semibold text-[var(--fg)]">Key commercial terms</th>
              <th className="px-4 py-3 font-semibold text-[var(--fg)]">Scooters</th>
              <th className="px-4 py-3 font-semibold text-[var(--fg)]">Cars</th>
            </tr>
          </thead>
          <tbody>
            {KEY_TERMS.map((row, i) => (
              <tr key={row.label} className={i % 2 === 1 ? "bg-[var(--surface-elevated)]/40" : ""}>
                <td className="border-t border-[var(--border)] px-4 py-3 font-medium text-[var(--fg)]">
                  {row.label}
                </td>
                <td className="border-t border-[var(--border)] px-4 py-3 text-[var(--fg-muted)]">
                  {row.scooters}
                </td>
                <td className="border-t border-[var(--border)] px-4 py-3 text-[var(--fg-muted)]">
                  {row.cars}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-[var(--fg-subtle)]">
        * The security deposit is not a liability cap. Full liability may apply in circumstances described in
        these Terms, including prohibited or uninsured use.
      </p>
    </>
  );
}

function CarScheduleTable() {
  return (
    <div className="mt-4 overflow-x-auto rounded-2xl border border-[var(--border)]">
      <table className="w-full min-w-[480px] border-collapse text-sm">
        <thead>
          <tr className="bg-[var(--surface-elevated)] text-left">
            <th className="px-4 py-3 font-semibold text-[var(--fg)]">Item</th>
            <th className="px-4 py-3 font-semibold text-[var(--fg)]">Current working term</th>
          </tr>
        </thead>
        <tbody>
          {CAR_SCHEDULE.map((row, i) => (
            <tr key={row.item} className={i % 2 === 1 ? "bg-[var(--surface-elevated)]/40" : ""}>
              <td className="border-t border-[var(--border)] px-4 py-3 font-medium text-[var(--fg)]">
                {row.item}
              </td>
              <td className="border-t border-[var(--border)] px-4 py-3 text-[var(--fg-muted)]">
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] px-6 py-24 text-[var(--fg)]">
      <div className="mx-auto max-w-4xl rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-12">
        <h1 className="font-display text-4xl font-semibold italic">Vehicle Rental Terms &amp; Conditions</h1>
        <p className="mt-2 text-sm text-[var(--fg-subtle)]">Cars &amp; Scooters · Sunshine Coast, Queensland</p>
        <p className="mt-1 text-sm text-[var(--fg-subtle)]">Last updated: 7 September 2026</p>

        <KeyTermsTable />

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-[var(--fg-muted)]">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--fg)]">1. Application and rental agreement</h2>
            <div className="space-y-3">
              <p>
                <strong className="text-[var(--fg)]">1.1 Application.</strong> These Terms apply to vehicles
                hired from Honk Hire Co, including cars and scooters. They form part of the Rental Agreement,
                vehicle schedule, condition report and any written variations or approvals issued by Honk Hire Co.
              </p>
              <p>
                <strong className="text-[var(--fg)]">1.2 Acceptance.</strong> A Hirer accepts these Terms by
                signing the Rental Agreement, paying a booking or rental amount, or taking possession of the
                Vehicle.
              </p>
              <p>
                <strong className="text-[var(--fg)]">1.3 Vehicle-specific terms.</strong> Where a requirement
                applies only to cars or only to scooters, that requirement will be identified in these Terms or
                the Rental Schedule. The Rental Schedule records the Vehicle, rate, included kilometres,
                security deposit, approved use, authorised drivers and other commercial terms.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--fg)]">2. Driver eligibility and identification</h2>
            <div className="space-y-3">
              <p>
                <strong className="text-[var(--fg)]">2.1 Scooter age.</strong> A scooter Hirer must be at least
                18 years old and hold the licence required for the relevant scooter under Queensland law.
              </p>
              <p>
                <strong className="text-[var(--fg)]">2.2 Car age and licence.</strong> The minimum age and
                licence requirements for car hire are subject to Honk Hire Co&apos;s insurer requirements. The
                working minimum age is 20 years but must be confirmed before the car rental product is issued.
              </p>
              <p>
                <strong className="text-[var(--fg)]">2.3 International drivers.</strong> An international Hirer
                must provide a current passport and current driver licence acceptable for driving the relevant
                Vehicle in Queensland. Honk Hire Co may also require the Hirer&apos;s home-country residential
                address, Australian mobile number, email address and emergency contact.
              </p>
              <p>
                <strong className="text-[var(--fg)]">2.4 Australian accommodation evidence.</strong> An
                international Hirer must provide evidence reasonably satisfactory to Honk Hire Co of current or
                intended Australian accommodation. This may include a hotel, hostel or Airbnb booking
                confirmation or receipt, tenancy agreement, employer-provided accommodation confirmation, or
                other evidence accepted by Honk Hire Co.
              </p>
              <p>
                <strong className="text-[var(--fg)]">2.5 Verification.</strong> Honk Hire Co may decline or
                delay a rental until identification, licence, accommodation and other requested verification is
                completed.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--fg)]">3. Authorised drivers</h2>
            <div className="space-y-3">
              <p>
                <strong className="text-[var(--fg)]">3.1 Authorised drivers only.</strong> Only the Hirer and
                any additional driver approved in writing by Honk Hire Co may drive or ride the Vehicle.
              </p>
              <p>
                <strong className="text-[var(--fg)]">3.2 Cars — additional drivers.</strong> Each approved
                additional driver of a car is charged $25 per week unless otherwise stated in the Rental
                Schedule. Each additional driver must satisfy Honk Hire Co&apos;s identification, licence, age
                and insurance requirements.
              </p>
              <p>
                <strong className="text-[var(--fg)]">3.3 Unauthorised drivers.</strong> Allowing an unauthorised
                person to drive or ride the Vehicle is a serious breach and may affect insurance or damage
                liability protections.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--fg)]">
              4. Minimum hire, rental payments and security
            </h2>
            <div className="space-y-3">
              <p>
                <strong className="text-[var(--fg)]">4.1 Minimum hire — scooters.</strong> The minimum scooter
                hire period is two (2) weeks.
              </p>
              <p>
                <strong className="text-[var(--fg)]">4.2 Minimum hire — cars.</strong> The minimum car hire
                period is two (2) weeks.
              </p>
              <p>
                <strong className="text-[var(--fg)]">4.3 Payment timing.</strong> One week&apos;s rental is
                payable before delivery or collection. Thereafter rental is payable weekly in advance. Car
                rental payments will continue to be processed through Stripe or another payment method approved
                by Honk Hire Co. The Hirer remains responsible for the applicable minimum rental commitment even
                if the Vehicle is returned early, except where required by law or otherwise agreed in writing.
              </p>
              <p>
                <strong className="text-[var(--fg)]">4.4 Security deposit — scooters.</strong> A refundable
                security deposit of $300 is required for scooters.
              </p>
              <p>
                <strong className="text-[var(--fg)]">4.5 Security deposit — cars.</strong> A refundable security
                deposit of $500 is required for cars.
              </p>
              <p>
                <strong className="text-[var(--fg)]">4.6 Security is not a liability cap.</strong> The security
                deposit is held as security for the Hirer&apos;s obligations. It is not a cap or limitation on
                liability. Honk Hire Co may apply all or part of the security deposit to amounts properly
                payable under the Rental Agreement, and the Hirer remains liable for any balance.
              </p>
              <p>
                <strong className="text-[var(--fg)]">4.7 Failed payment.</strong> If a rental payment is
                overdue, Honk Hire Co may issue written notice. If payment remains unpaid for 24 hours after
                notice, Honk Hire Co may terminate the rental and take lawful steps to locate and recover the
                Vehicle. The security deposit may be applied to outstanding amounts and recovery costs, subject
                to applicable law.
              </p>
              <p>
                <strong className="text-[var(--fg)]">4.8 Debt collection and overdue amounts.</strong> The Hirer
                is responsible for reasonable debt collection, legal, recovery and enforcement costs actually
                incurred by Honk Hire Co in recovering overdue amounts, to the extent legally recoverable.
                Interest may accrue on overdue amounts at 10% per annum, calculated daily, to the extent
                permitted by law.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--fg)]">5. Delivery and collection</h2>
            <div className="space-y-3">
              <p>
                <strong className="text-[var(--fg)]">5.1 Cars.</strong> Car delivery and/or collection is
                subject to availability. The standard charge is $100 within 20 km of Honk Hire Co&apos;s
                nominated service location. Locations beyond 20 km are quoted individually.
              </p>
              <p>
                <strong className="text-[var(--fg)]">5.2 Condition at handover.</strong> The Vehicle must be
                inspected at handover. Pre-existing damage should be recorded in the condition report and/or
                photographs. The Hirer must promptly notify Honk Hire Co of any discrepancy.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--fg)]">6. Kilometre allowance</h2>
            <div className="space-y-3">
              <p>
                <strong className="text-[var(--fg)]">6.1 Scooters.</strong> Scooters include 500 kilometres per
                seven-day rental period unless the Rental Schedule states otherwise. Excess kilometres are
                charged at $0.23 per kilometre.
              </p>
              <p>
                <strong className="text-[var(--fg)]">6.2 Cars.</strong> Cars include 1,000 kilometres per
                seven-day rental period unless the Rental Schedule states otherwise. Excess kilometres are
                charged at $0.30 per kilometre.
              </p>
              <p>
                <strong className="text-[var(--fg)]">6.3 Reporting.</strong> Honk Hire Co may require periodic
                odometer photographs or telematics readings. Failure to provide requested odometer information
                may constitute a breach.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--fg)]">7. Approved and prohibited use</h2>
            <div className="space-y-3">
              <p>
                <strong className="text-[var(--fg)]">7.1 Normal use.</strong> The Vehicle may be used for
                lawful private transport and any other use specifically approved by Honk Hire Co.
              </p>
              <p>
                <strong className="text-[var(--fg)]">7.2 Delivery work.</strong> Cars may be approved for food,
                parcel or other delivery work, including services such as Uber Eats, DoorDash or similar
                platforms. The Hirer must disclose intended delivery use before it begins and obtain Honk Hire
                Co&apos;s approval. Specific rates, insurance conditions, excesses, kilometre allowances or
                other restrictions may apply.
              </p>
              <p>
                <strong className="text-[var(--fg)]">7.3 Passenger rideshare.</strong> Passenger rideshare or
                passenger-for-reward use, including Uber passenger services, is not permitted unless Honk Hire
                Co later gives specific written approval.
              </p>
              <p>
                <strong className="text-[var(--fg)]">7.4 Towing.</strong> The Vehicle must not tow a trailer,
                caravan or other object unless Honk Hire Co has approved the towing use in writing beforehand.
              </p>
              <p>
                <strong className="text-[var(--fg)]">7.5 Off-road and beach use.</strong> Vehicles must not be
                driven or ridden off-road, on beaches, in water crossings, on unformed tracks or in other
                unsuitable terrain. Noosa North Shore, Teewah or similar beach driving is prohibited unless
                specifically authorised in writing.
              </p>
              <p>
                <strong className="text-[var(--fg)]">7.6 Other prohibited conduct.</strong> The Hirer must not
                use the Vehicle while affected by alcohol or drugs; for racing, speed trials or unlawful
                purposes; overload the Vehicle; intentionally or recklessly damage it; tamper with tracking
                equipment; permit an unauthorised driver; or use it contrary to manufacturer&apos;s limits or
                road laws.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--fg)]">8. Fuel, vehicle care and maintenance</h2>
            <div className="space-y-3">
              <p>
                <strong className="text-[var(--fg)]">8.1 Fuel.</strong> Vehicles are supplied on a full-to-full
                basis unless the Rental Schedule states otherwise. The Hirer must use the correct fuel and
                return the Vehicle with a full tank. Incorrect fuel and associated recovery or repair costs are
                the Hirer&apos;s responsibility where caused by the Hirer.
              </p>
              <p>
                <strong className="text-[var(--fg)]">8.2 Routine servicing and inspections.</strong> Honk Hire
                Co is responsible for scheduled maintenance and routine servicing. When notified that servicing,
                inspection, tyre replacement, recall work, registration-related inspection or other safety or
                preventative maintenance is required, the Hirer must present the Vehicle at the nominated
                location within the reasonable timeframe specified by Honk Hire Co. Failure to make the Vehicle
                available may constitute a breach, and the Hirer may be responsible for resulting damage or loss
                to the extent legally recoverable.
              </p>
              <p>
                <strong className="text-[var(--fg)]">8.3 Warning lights and mechanical faults.</strong> The
                Hirer must promptly notify Honk Hire Co of any warning light, overheating, oil-pressure warning,
                coolant loss, unusual noise or vibration, transmission issue, fluid leak or other apparent
                mechanical fault. The Hirer must stop driving where continued operation could reasonably cause
                further damage or create a safety risk and must follow Honk Hire Co&apos;s reasonable
                instructions. The Hirer may be responsible for additional damage caused by continuing to
                operate the Vehicle after becoming aware, or reasonably being expected to become aware, of a
                fault.
              </p>
              <p>
                <strong className="text-[var(--fg)]">8.4 Unauthorised repairs.</strong> The Hirer must not
                modify, dismantle or arrange repairs to the Vehicle without Honk Hire Co&apos;s prior approval,
                except emergency action reasonably required to protect people or property.
              </p>
              <p>
                <strong className="text-[var(--fg)]">8.5 Tyres.</strong> Honk Hire Co is responsible for
                ordinary tyre wear. Punctures, sidewall damage, kerb damage, misuse or other tyre damage arising
                during the rental may be charged to the Hirer where attributable to the Hirer&apos;s use.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--fg)]">9. Damage, security and liability</h2>
            <div className="space-y-3">
              <p>
                <strong className="text-[var(--fg)]">9.1 Responsibility.</strong> The Hirer is responsible for
                the Vehicle from handover until it is returned to and accepted by Honk Hire Co, subject to
                applicable law, insurance and these Terms.
              </p>
              <p>
                <strong className="text-[var(--fg)]">9.2 Car standard damage liability.</strong> For cars, the
                working standard damage liability is $1,000 per incident. This amount is separate from the $500
                security deposit. The final operation of this liability, including exclusions and any
                additional excesses, is subject to insurer confirmation.
              </p>
              <p>
                <strong className="text-[var(--fg)]">9.3 Damage event.</strong> Any new damage arising during
                the rental must be reported promptly. The applicable damage liability is assessed per incident,
                not by reference to the amount of the security deposit.
              </p>
              <p>
                <strong className="text-[var(--fg)]">9.4 Full liability circumstances.</strong> Where insurance
                or contractual damage protection does not apply because of a serious breach, prohibited use,
                unauthorised driver, intoxication, deliberate or reckless conduct, failure to disclose an
                approved-use requirement, or another insurer exclusion, the Hirer may be liable for the full
                loss, subject to applicable law and the insurance policy.
              </p>
              <p>
                <strong className="text-[var(--fg)]">9.5 Windscreen and glass.</strong> New windscreen or glass
                damage arising during the hire is treated as damage. For cars, the $1,000 standard damage
                liability applies to a damage incident unless the insurer or Rental Schedule specifies a
                different glass arrangement.
              </p>
              <p>
                <strong className="text-[var(--fg)]">9.6 Downtime / loss of use.</strong> Where a car or scooter
                is unavailable for rental because of damage attributable to the Hirer, Honk Hire Co may claim
                reasonable loss of use or lost rental income to the extent legally recoverable, together with
                other properly recoverable loss.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--fg)]">10. Accidents, theft and incidents</h2>
            <div className="space-y-3">
              <p>
                <strong className="text-[var(--fg)]">10.1 Immediate obligations.</strong> Following an accident,
                collision, theft or material damage, the Hirer must ensure safety, contact emergency services or
                police where required, obtain relevant third-party and witness details, take photographs where
                safe, and notify Honk Hire Co as soon as practicable.
              </p>
              <p>
                <strong className="text-[var(--fg)]">10.2 No admissions.</strong> The Hirer must not admit
                liability or settle a third-party claim on behalf of Honk Hire Co.
              </p>
              <p>
                <strong className="text-[var(--fg)]">10.3 Theft.</strong> Theft must be reported to police
                promptly and the police report or event number provided to Honk Hire Co. Keys and other security
                devices must be accounted for.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--fg)]">11. Breakdown and roadside assistance</h2>
            <div className="space-y-3">
              <p>
                <strong className="text-[var(--fg)]">11.1 Mechanical failure.</strong> Where a Vehicle suffers a
                mechanical failure not caused by the Hirer, Honk Hire Co will arrange reasonable assistance,
                repair or a replacement Vehicle subject to availability.
              </p>
              <p>
                <strong className="text-[var(--fg)]">11.2 No replacement available.</strong> If a replacement
                Vehicle is not available, rental charges for the period the Vehicle cannot reasonably be used
                because of the mechanical failure will be paused or refunded on a pro-rata basis.
              </p>
              <p>
                <strong className="text-[var(--fg)]">11.3 Hirer-caused call-outs.</strong> The Hirer is
                responsible for call-out, recovery and related costs where assistance is required because of
                the Hirer&apos;s act or omission, including lost keys, incorrect fuel, avoidable flat battery,
                misuse, unauthorised use or similar renter-caused issues.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--fg)]">12. Cleaning, smoking, pets and keys</h2>
            <div className="space-y-3">
              <p>
                <strong className="text-[var(--fg)]">12.1 General cleaning.</strong> A $120 cleaning charge may
                apply where the Vehicle requires cleaning beyond ordinary rental use.
              </p>
              <p>
                <strong className="text-[var(--fg)]">12.2 Smoking and vaping.</strong> Smoking or vaping in any
                Honk Hire Co Vehicle is prohibited. A $500 smoking/vaping remediation charge may apply where
                there is evidence of smoking or vaping and remediation is reasonably required.
              </p>
              <p>
                <strong className="text-[var(--fg)]">12.3 Pets.</strong> Pets must not be carried where this
                causes unreasonable soiling, odour, hair or damage. Evidence of pets that requires additional
                cleaning may result in the applicable cleaning charge and any reasonable additional remediation
                or repair costs.
              </p>
              <p>
                <strong className="text-[var(--fg)]">12.4 Lost or damaged keys.</strong> The Hirer is
                responsible for the reasonable actual cost of replacing any lost or damaged Vehicle key,
                including programming, locksmith, replacement remote/fob, recovery or related costs where
                applicable and legally recoverable.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--fg)]">13. Fines, tolls and administration</h2>
            <div className="space-y-3">
              <p>
                <strong className="text-[var(--fg)]">13.1 Fines and infringements.</strong> The Hirer is
                responsible for traffic, parking and other infringements arising from use of the Vehicle during
                the rental. Where Honk Hire Co must nominate the Hirer, transfer liability, process
                correspondence or otherwise administer an infringement, a $10 administration fee may be charged
                for each infringement, subject to applicable law.
              </p>
              <p>
                <strong className="text-[var(--fg)]">13.2 Tolls.</strong> The Hirer is responsible for tolls
                incurred during the rental. Where Honk Hire Co must process or recover a toll charge, a $10
                administration fee may be charged for each toll processing event in addition to the toll,
                subject to applicable law.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--fg)]">14. GPS, telematics and vehicle recovery</h2>
            <div className="space-y-3">
              <p>
                <strong className="text-[var(--fg)]">14.1 Tracking.</strong> Vehicles may be fitted with GPS or
                telematics devices for fleet management, security, servicing, location, theft prevention and
                lawful vehicle recovery.
              </p>
              <p>
                <strong className="text-[var(--fg)]">14.2 GPS / telematics tampering.</strong> The Hirer must
                not disable, disconnect, remove, damage, interfere with, shield, obscure or otherwise attempt to
                prevent the operation or transmission of any GPS or telematics device. Intentional tampering is
                a serious breach of the Rental Agreement and may result in termination and lawful vehicle
                recovery. The Hirer may be responsible for reasonable inspection, repair, replacement and
                recovery costs arising from the tampering, to the extent legally recoverable.
              </p>
              <p>
                <strong className="text-[var(--fg)]">14.3 Recovery.</strong> Where the rental has been validly
                terminated, the Vehicle is overdue, payments remain unpaid after required notice, the Vehicle is
                being unlawfully retained, tracking has been tampered with, or another serious breach has
                occurred, Honk Hire Co may take lawful steps to locate and recover the Vehicle. Reasonable
                recovery costs caused by the Hirer&apos;s breach may be charged to the Hirer where legally
                recoverable.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--fg)]">
              15. Returns, extensions, notice and early return
            </h2>
            <div className="space-y-3">
              <p>
                <strong className="text-[var(--fg)]">15.1 Extensions.</strong> Extensions are subject to
                availability and must be approved by Honk Hire Co. Continued possession does not waive the
                Hirer&apos;s payment obligations.
              </p>
              <p>
                <strong className="text-[var(--fg)]">15.2 Return condition.</strong> The Vehicle must be
                returned at the agreed place and time, with the required fuel level, keys and supplied
                equipment, and in a condition consistent with fair wear and tear.
              </p>
              <p>
                <strong className="text-[var(--fg)]">15.3 Early return during minimum term.</strong> Early
                return does not automatically create a refund and does not remove the two-week minimum hire
                commitment, except where required by law or agreed in writing.
              </p>
              <p>
                <strong className="text-[var(--fg)]">15.4 Termination after minimum term.</strong> After the
                two-week minimum rental period has been completed, the rental continues on a weekly basis until
                terminated. Either party may terminate the rental by giving at least fourteen (14) days&apos;
                written notice, unless termination occurs earlier because of a serious breach, non-payment or
                another right permitted by law. Rental charges continue during the notice period whether or not
                the Hirer elects to return the Vehicle early, except where otherwise required by law or agreed
                in writing.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--fg)]">16. Insurance</h2>
            <div className="space-y-3">
              <p>
                <strong className="text-[var(--fg)]">16.1 Insurance-dependent terms.</strong> Car insurance
                requirements, driver age and licence exclusions, international-driver conditions, delivery-use
                conditions, additional excesses and circumstances affecting cover are to be confirmed with Honk
                Hire Co&apos;s insurer.
              </p>
              <p>
                <strong className="text-[var(--fg)]">16.2 Disclosure.</strong> The Hirer must truthfully
                disclose intended use of the Vehicle. In particular, commercial delivery work must be declared
                before use. Failure to disclose a material use may affect insurance and may expose the Hirer to
                greater liability.
              </p>
              <p>
                <strong className="text-[var(--fg)]">16.3 No representation beyond policy.</strong> Nothing in
                these Terms is intended to provide insurance cover beyond the cover actually available under the
                applicable policy or to exclude rights that cannot lawfully be excluded.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--fg)]">17. Privacy and personal information</h2>
            <div className="space-y-3">
              <p>
                <strong className="text-[var(--fg)]">17.1 Collection.</strong> Honk Hire Co may collect
                identity, licence, passport, contact, accommodation, emergency contact, rental, payment,
                odometer and vehicle-location information reasonably required to administer the rental, protect
                the Vehicle and comply with legal obligations.
              </p>
              <p>
                <strong className="text-[var(--fg)]">17.2 Use and disclosure.</strong> Information may be used
                for booking administration, payments, servicing, customer communication, fraud prevention,
                vehicle recovery, insurance and legal purposes, and may be disclosed where reasonably necessary
                to service providers, insurers, authorities or recovery providers, subject to applicable privacy
                law.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-[var(--fg)]">18. General</h2>
            <div className="space-y-3">
              <p>
                <strong className="text-[var(--fg)]">18.1 Australian Consumer Law.</strong> Nothing in these
                Terms excludes, restricts or modifies any guarantee, right or remedy that cannot lawfully be
                excluded under the Australian Consumer Law or other applicable legislation.
              </p>
              <p>
                <strong className="text-[var(--fg)]">18.2 Governing law.</strong> These Terms are governed by
                the laws of Queensland, Australia.
              </p>
              <p>
                <strong className="text-[var(--fg)]">18.3 Severability.</strong> If any provision is invalid or
                unenforceable, the remaining provisions continue to operate to the extent permitted by law.
              </p>
              <p>
                <strong className="text-[var(--fg)]">18.4 Variations.</strong> Vehicle-specific pricing,
                approved use and other commercial details may be recorded in the Rental Schedule. Material
                changes to an existing rental should be agreed in writing.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-10">
          <h2 className="text-lg font-semibold text-[var(--fg)]">Schedule A — Car rental commercial settings</h2>
          <CarScheduleTable />
        </div>
      </div>
    </main>
  );
}
