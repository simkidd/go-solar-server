const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const OrderModel = new Schema(
  {
    trackingId: {
      type: String,
      required: true,
      unique: true,
    },
    user: {
      type: Schema.ObjectId,
      ref: "User",
    },
    products: [
      { product: { type: Schema.ObjectId, ref: "Product" }, qty: Number },
    ],

    totalPricePaid: {
      type: Number,
      required: true,
    },

    paymentMethod: {
      type: String,
      required: true,
    },

    paymentReference: {
      type: String,
      required: true,
    },

    paymentData: {
      type: String,
    },

    //processing: the order has just been made, and package has not been sent out for delivery
    //cancelled: order has been cancelled. either by buyer or seller
    //delivered: package has been sent out for delivery

    //recieved: package has been recieved by buyer
    trackingStatus: {
      type: String,
      enum: ["Processing", "Delivered", "Recieved"],
      default: "Processing",
    },

    isCancelled: {
      // an order can only be cancelled when it is stil in processing stage
      type: Boolean,
      default: false,
    },

    cancelledBy: {
      type: String,
    },

    cancellationReason: {
      type: String,
    },

    //rejected: package was rejected (there was a problem with package). this action can only be triggered by delivery person or admin
    isRejected: {
      type: Boolean,
      default: false,
    },

    rejectionReason: {
      type: String,
    },

    isCompleted: {
      type: Boolean,
      default: false,
    },

    isResolved: {
      // when an order is resolved, nothing can be done again(will be triggered when an order dispute like cancellations, rejections are resolved, and when an order is completed)
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderModel);
