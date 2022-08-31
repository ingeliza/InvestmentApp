-- CreateTable
CREATE TABLE `client` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `username` CHAR(255) NOT NULL,
    `cash` INTEGER NOT NULL,
    `gainOrLoss` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `stock` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `company` CHAR(255) NOT NULL,
    `unitPrice` INTEGER NOT NULL,
    `currentPrice` INTEGER NOT NULL,
    `updatedAt` DATE NULL,
    `volume` INTEGER NULL,
    `clientId` INTEGER UNSIGNED NULL,
    `gainOrLoss` INTEGER NOT NULL,

    INDEX `clientId`(`clientId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `stock` ADD CONSTRAINT `stock_ibfk_1` FOREIGN KEY (`clientId`) REFERENCES `client`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
