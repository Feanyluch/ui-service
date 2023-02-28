// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: fintekkers/models/transaction/transaction.proto

package fintekkers.models.transaction;

public interface TransactionProtoOrBuilder extends
    // @@protoc_insertion_point(interface_extends:fintekkers.models.transaction.TransactionProto)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>string object_class = 1;</code>
   * @return The objectClass.
   */
  java.lang.String getObjectClass();
  /**
   * <code>string object_class = 1;</code>
   * @return The bytes for objectClass.
   */
  com.google.protobuf.ByteString
      getObjectClassBytes();

  /**
   * <code>string version = 2;</code>
   * @return The version.
   */
  java.lang.String getVersion();
  /**
   * <code>string version = 2;</code>
   * @return The bytes for version.
   */
  com.google.protobuf.ByteString
      getVersionBytes();

  /**
   * <pre>
   *Primary Key
   * </pre>
   *
   * <code>.fintekkers.models.util.UUIDProto uuid = 5;</code>
   * @return Whether the uuid field is set.
   */
  boolean hasUuid();
  /**
   * <pre>
   *Primary Key
   * </pre>
   *
   * <code>.fintekkers.models.util.UUIDProto uuid = 5;</code>
   * @return The uuid.
   */
  fintekkers.models.util.Uuid.UUIDProto getUuid();
  /**
   * <pre>
   *Primary Key
   * </pre>
   *
   * <code>.fintekkers.models.util.UUIDProto uuid = 5;</code>
   */
  fintekkers.models.util.Uuid.UUIDProtoOrBuilder getUuidOrBuilder();

  /**
   * <code>.fintekkers.models.util.LocalTimestampProto as_of = 6;</code>
   * @return Whether the asOf field is set.
   */
  boolean hasAsOf();
  /**
   * <code>.fintekkers.models.util.LocalTimestampProto as_of = 6;</code>
   * @return The asOf.
   */
  fintekkers.models.util.LocalTimestamp.LocalTimestampProto getAsOf();
  /**
   * <code>.fintekkers.models.util.LocalTimestampProto as_of = 6;</code>
   */
  fintekkers.models.util.LocalTimestamp.LocalTimestampProtoOrBuilder getAsOfOrBuilder();

  /**
   * <code>bool is_link = 7;</code>
   * @return The isLink.
   */
  boolean getIsLink();

  /**
   * <pre>
   *Transaction details
   * </pre>
   *
   * <code>.fintekkers.models.portfolio.PortfolioProto portfolio = 10;</code>
   * @return Whether the portfolio field is set.
   */
  boolean hasPortfolio();
  /**
   * <pre>
   *Transaction details
   * </pre>
   *
   * <code>.fintekkers.models.portfolio.PortfolioProto portfolio = 10;</code>
   * @return The portfolio.
   */
  fintekkers.models.portfolio.PortfolioProto getPortfolio();
  /**
   * <pre>
   *Transaction details
   * </pre>
   *
   * <code>.fintekkers.models.portfolio.PortfolioProto portfolio = 10;</code>
   */
  fintekkers.models.portfolio.PortfolioProtoOrBuilder getPortfolioOrBuilder();

  /**
   * <code>.fintekkers.models.security.SecurityProto security = 11;</code>
   * @return Whether the security field is set.
   */
  boolean hasSecurity();
  /**
   * <code>.fintekkers.models.security.SecurityProto security = 11;</code>
   * @return The security.
   */
  fintekkers.models.security.SecurityProto getSecurity();
  /**
   * <code>.fintekkers.models.security.SecurityProto security = 11;</code>
   */
  fintekkers.models.security.SecurityProtoOrBuilder getSecurityOrBuilder();

  /**
   * <code>.fintekkers.models.transaction.TransactionTypeProto transaction_type = 12;</code>
   * @return The enum numeric value on the wire for transactionType.
   */
  int getTransactionTypeValue();
  /**
   * <code>.fintekkers.models.transaction.TransactionTypeProto transaction_type = 12;</code>
   * @return The transactionType.
   */
  fintekkers.models.transaction.TransactionTypeProto getTransactionType();

  /**
   * <code>.fintekkers.models.util.DecimalValueProto quantity = 13;</code>
   * @return Whether the quantity field is set.
   */
  boolean hasQuantity();
  /**
   * <code>.fintekkers.models.util.DecimalValueProto quantity = 13;</code>
   * @return The quantity.
   */
  fintekkers.models.util.DecimalValue.DecimalValueProto getQuantity();
  /**
   * <code>.fintekkers.models.util.DecimalValueProto quantity = 13;</code>
   */
  fintekkers.models.util.DecimalValue.DecimalValueProtoOrBuilder getQuantityOrBuilder();

  /**
   * <code>.fintekkers.models.price.PriceProto price = 14;</code>
   * @return Whether the price field is set.
   */
  boolean hasPrice();
  /**
   * <code>.fintekkers.models.price.PriceProto price = 14;</code>
   * @return The price.
   */
  fintekkers.models.price.PriceProto getPrice();
  /**
   * <code>.fintekkers.models.price.PriceProto price = 14;</code>
   */
  fintekkers.models.price.PriceProtoOrBuilder getPriceOrBuilder();

  /**
   * <pre>
   *NOTE: We're using timestamps for dates. The time portion will be ignored when parsing
   * </pre>
   *
   * <code>.fintekkers.models.util.LocalDateProto trade_date = 15;</code>
   * @return Whether the tradeDate field is set.
   */
  boolean hasTradeDate();
  /**
   * <pre>
   *NOTE: We're using timestamps for dates. The time portion will be ignored when parsing
   * </pre>
   *
   * <code>.fintekkers.models.util.LocalDateProto trade_date = 15;</code>
   * @return The tradeDate.
   */
  fintekkers.models.util.LocalDate.LocalDateProto getTradeDate();
  /**
   * <pre>
   *NOTE: We're using timestamps for dates. The time portion will be ignored when parsing
   * </pre>
   *
   * <code>.fintekkers.models.util.LocalDateProto trade_date = 15;</code>
   */
  fintekkers.models.util.LocalDate.LocalDateProtoOrBuilder getTradeDateOrBuilder();

  /**
   * <code>.fintekkers.models.util.LocalDateProto settlement_date = 16;</code>
   * @return Whether the settlementDate field is set.
   */
  boolean hasSettlementDate();
  /**
   * <code>.fintekkers.models.util.LocalDateProto settlement_date = 16;</code>
   * @return The settlementDate.
   */
  fintekkers.models.util.LocalDate.LocalDateProto getSettlementDate();
  /**
   * <code>.fintekkers.models.util.LocalDateProto settlement_date = 16;</code>
   */
  fintekkers.models.util.LocalDate.LocalDateProtoOrBuilder getSettlementDateOrBuilder();

  /**
   * <pre>
   *Lineage
   *  TransactionProto cashTransaction = 20;
   *  TransactionProto parentTransaction = 21;
   * </pre>
   *
   * <code>repeated .fintekkers.models.transaction.TransactionProto childTransactions = 20;</code>
   */
  java.util.List<fintekkers.models.transaction.TransactionProto> 
      getChildTransactionsList();
  /**
   * <pre>
   *Lineage
   *  TransactionProto cashTransaction = 20;
   *  TransactionProto parentTransaction = 21;
   * </pre>
   *
   * <code>repeated .fintekkers.models.transaction.TransactionProto childTransactions = 20;</code>
   */
  fintekkers.models.transaction.TransactionProto getChildTransactions(int index);
  /**
   * <pre>
   *Lineage
   *  TransactionProto cashTransaction = 20;
   *  TransactionProto parentTransaction = 21;
   * </pre>
   *
   * <code>repeated .fintekkers.models.transaction.TransactionProto childTransactions = 20;</code>
   */
  int getChildTransactionsCount();
  /**
   * <pre>
   *Lineage
   *  TransactionProto cashTransaction = 20;
   *  TransactionProto parentTransaction = 21;
   * </pre>
   *
   * <code>repeated .fintekkers.models.transaction.TransactionProto childTransactions = 20;</code>
   */
  java.util.List<? extends fintekkers.models.transaction.TransactionProtoOrBuilder> 
      getChildTransactionsOrBuilderList();
  /**
   * <pre>
   *Lineage
   *  TransactionProto cashTransaction = 20;
   *  TransactionProto parentTransaction = 21;
   * </pre>
   *
   * <code>repeated .fintekkers.models.transaction.TransactionProto childTransactions = 20;</code>
   */
  fintekkers.models.transaction.TransactionProtoOrBuilder getChildTransactionsOrBuilder(
      int index);

  /**
   * <pre>
   *Business metadata
   * </pre>
   *
   * <code>.fintekkers.models.position.PositionStatusProto position_status = 25;</code>
   * @return The enum numeric value on the wire for positionStatus.
   */
  int getPositionStatusValue();
  /**
   * <pre>
   *Business metadata
   * </pre>
   *
   * <code>.fintekkers.models.position.PositionStatusProto position_status = 25;</code>
   * @return The positionStatus.
   */
  fintekkers.models.position.PositionStatusProto getPositionStatus();

  /**
   * <code>string trade_name = 26;</code>
   * @return The tradeName.
   */
  java.lang.String getTradeName();
  /**
   * <code>string trade_name = 26;</code>
   * @return The bytes for tradeName.
   */
  com.google.protobuf.ByteString
      getTradeNameBytes();

  /**
   * <code>.fintekkers.models.strategy.StrategyAllocationProto strategy_allocation = 27;</code>
   * @return Whether the strategyAllocation field is set.
   */
  boolean hasStrategyAllocation();
  /**
   * <code>.fintekkers.models.strategy.StrategyAllocationProto strategy_allocation = 27;</code>
   * @return The strategyAllocation.
   */
  fintekkers.models.strategy.StrategyAllocationProto getStrategyAllocation();
  /**
   * <code>.fintekkers.models.strategy.StrategyAllocationProto strategy_allocation = 27;</code>
   */
  fintekkers.models.strategy.StrategyAllocationProtoOrBuilder getStrategyAllocationOrBuilder();

  /**
   * <pre>
   *System-based fields
   * </pre>
   *
   * <code>bool is_cancelled = 30;</code>
   * @return The isCancelled.
   */
  boolean getIsCancelled();
}